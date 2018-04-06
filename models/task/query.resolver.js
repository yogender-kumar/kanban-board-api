'use strict';
import Task from './schema.js';

export default {
    Query: {
        getTaskById: (_, args) => {
            return Task.find({taskId: args.taskId}, (err, task) => {
                if(err) {
                    return false;
                }
            });
        }
    }
};