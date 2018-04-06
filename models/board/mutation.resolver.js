'use strict';
import { v4 } from 'uuid';
import Board from './schema.js';
import { ERROR } from '../../constants/messages';

export default {
    Mutation: {
        createBoard: (_, args) => {
            return Board.create({
                bId: v4(),
                status: args.status,
                name: args.name,
            }, (err, taskData) => {
                if(err) {
                    console.log(err);
                    return false;
                }
            });
        },
        updateBoard: (_, args) => {
            return Board.findOne({bId: args.bId})
            .then(board => {
                if(board && board.bId){
                    board.name = args.name || board.name;
                    return board.save();
                }else{
                    return new Error(ERROR.BOARD.NOT_FOUND);
                }
            });
        },
        addUserToBoard: (_, args) => {
            return Board.findOne({bId: args.bId})
            .then(board => {
                if(board && board.bId){
                    board.uId.push(args.uId);
                    return board.save();
                }else{
                    return new Error(ERROR.BOARD.NOT_FOUND);
                }
            });
        }
    }
};