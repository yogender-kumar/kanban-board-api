'use strict';
import { v4 } from 'uuid';
import User from './schema.js';
import bCrypt from '../../utils/bcrypt.js';
import { ERROR } from '../../constants/messages';

export default {
    Mutation: {
        createUser: (_, args) => {
            return User.create({
                uId: v4(),
                status: args.status,
                name: args.name,
                email: args.email,
                password: bCrypt.encryptSync(args.password),
            }, (err, taskData) => {
                if(err) {
                    console.log(err);
                    return false;
                }
            });
        },
        updateUser: (_, args) => {
            return User.findOne({uId: args.uId})
            .then(user => {
                if(user && user.uId){
                    user.name = args.name || user.name;
                    return user.save();
                }else{
                    return new Error(ERROR.USER.NOT_FOUND);
                }
            });
        },
        updatePassword: (_, args) => {
            return User.findOne({uId: args.uId})
            .then(user => {
                if(user && user.uId){
                    user.password = bCrypt.encryptSync(args.password) || user.password;
                    return user.save();
                }else{
                    return new Error(ERROR.USER.NOT_FOUND);
                }
            });
        }
    }
};