const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskId: {
        type: String,
        required: true,
        index: {unique: true}
    },
    status: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});



export default mongoose.model('Task', taskSchema);