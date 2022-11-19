const mongoose = require('mongoose');
const {Schema} =  mongoose;

const userSchema = new Schema({
        username: {
            required: true,
            type: String
        },
        address: {
            required : true,
            type : String
        },
        email: {
            required : true,
            type: String,
            unique: true
        },
        ph : {
            required : true,
            type : Number,
            unique: true
        },
        password: {
            required: true,
            type: String
        },
        userphoto:{
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        },
        status:{
            type: Number,
            default: 0
        },
        role:{
            type: Number,
            default: 0
        }
})

module.exports = mongoose.model('user',userSchema);