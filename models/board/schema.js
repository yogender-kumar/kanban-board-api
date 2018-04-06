const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    bId: {
        type: String,
        required: true,
        index: {unique: true}
    },
    status: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});



export default mongoose.model('Board', boardSchema);