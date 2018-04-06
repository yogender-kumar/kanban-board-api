'use strict';
import { v4 } from 'uuid';
import Task from './schema.js';

export default {
    Mutation: {
        createTask: (_, args) => {
            return Task.create({
                taskId: v4(),
                status: args.status,
                title: args.title,
                description: args.description,
            }, (err, taskData) => {
                if(err) {
                    console.log(err);
                    return false;
                }
            });
        }
    }
};