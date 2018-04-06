const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uId: {
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
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});



export default mongoose.model('User', userSchema);