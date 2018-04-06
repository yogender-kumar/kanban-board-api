var fs = require('fs');
var path = require('path');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var CONSTANTS = require('../constants/constants');
var jsonfile = require('jsonfile');

var cert = {
    publicCert: fs.readFileSync(path.resolve(path.join(process.cwd()), CONSTANTS.ENCRYPT.KEY.PUBLIC), CONSTANTS.CHAR_SET),
    phrase: jsonfile.readFileSync(path.resolve(path.join(process.cwd()), CONSTANTS.ENCRYPT.KEY.PHRASE), CONSTANTS.CHAR_SET)
};

cert.privateCert = {
    key: fs.readFileSync(path.resolve(path.join(process.cwd()), CONSTANTS.ENCRYPT.KEY.PRIVATE), CONSTANTS.CHAR_SET),
    passphrase: cert.phrase.private_key
};


module.exports = {
    create: function(user) {
        try{
            var cipher = crypto.createCipher(CONSTANTS.ENCRYPT.CRYPTO_ALGO,cert.phrase.crypto_key);
            var crypted = cipher.update(
                jwt.sign(
                    {
                        email: user.email,
                        status: user.status,
                        uId: user.uId,
                        name: user.name
                    },
                    cert.privateCert,
                    {algorithm: CONSTANTS.ENCRYPT.JWT_ALGO}
                ),
                CONSTANTS.CHAR_SET,
                CONSTANTS.ENCRYPT.CRYPTO_DIGEST
            );
            crypted += cipher.final(CONSTANTS.ENCRYPT.CRYPTO_DIGEST);
            
            return crypted;
        }catch(err){
            console.log(err.message);
            return null;
        }
    },
    verify: function(token) {
        var cipher = crypto.createDecipher(CONSTANTS.ENCRYPT.CRYPTO_ALGO, cert.phrase.crypto_key);
        var decrypted = cipher.update(token, CONSTANTS.ENCRYPT.CRYPTO_DIGEST, CONSTANTS.CHAR_SET);
        decrypted += cipher.final(CONSTANTS.CHAR_SET);
        
        return jwt.verify(
            decrypted, cert.publicCert,
            { algorithms: CONSTANTS.ENCRYPT.JWT_ALGO }
        );
    }
}