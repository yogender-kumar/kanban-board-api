'use strict';

import bcrypt from 'bcrypt';
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);

const bCrypt = {
    encryptSync: function(val) {
        return bcrypt.hashSync(val, salt);
    },
    compareSync: function(val, hash) {
        return bcrypt.compareSync(val, hash);
    }
};

export default bCrypt;