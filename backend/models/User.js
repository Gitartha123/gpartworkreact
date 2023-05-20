const mongoose = require('mongoose');
const {Schema} =  mongoose;

const userSchema = new Schema({
        username: {
            required: true,
            type: String
        },

        email: {
            required : true,
            type: String,
            unique: true
        },

        password: {
            required: true,
            type: String
        },
   
        date: {
            type: Date,
            default: Date.now
        },

        userphoto:{
            type:String,
            default:""
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