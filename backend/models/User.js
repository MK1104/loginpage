const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    firstname:{
        type: String,
        required: true,
        maxlength: 20,
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 20,
    },
    username:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    email:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password:{      
        type: String,
        required: true,
        minlength:6,
    },
    phonenumber:{
        type: Number,
        required: true,
        minlength:10,
        maxlength: 10,
        unique: true
    },

    admin:{
        type: Boolean,
        default: false,
    },   
    },
    {timestamps: true}
);

module.exports = mongoose.model("user", userSchema);