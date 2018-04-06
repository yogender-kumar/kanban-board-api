'use strict';
import User from './schema.js';
import bCrypt from '../../utils/bcrypt.js';
import token from '../../utils/authentication';
import { ERROR } from '../../constants/messages';

export default {
    Query: {
        generateToken: (_, args) => {
            //console.log(args);
            return User.findOne({email: args.email})
            .then(user => {
                //console.log(user);
                if(user && user.uId){
                    if(!bCrypt.compareSync(args.password, user.password)){
                        return new Error(ERROR.USER.PASSWORD_MISMATCH);
                    }else{
                        return [{token: token.create(user)}];
                    }
                }else{
                    return new Error(ERROR.USER.NOT_FOUND);
                }
            });
        },
        authToken: (_, args) => {
            return [token.verify(args.token)];
        }
    }
};