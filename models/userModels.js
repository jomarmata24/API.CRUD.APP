const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "Enter your name"]

        },
        username: {

            type:String,
            required:[true, "Enter your username"]

        },
        password:{
            type:String,Number,
            required:[true, "Enter your password"]
        }

    },
    {
        timestamps:true
    }
);

const user = mongoose.model('user', userSchema);
module.exports = user;