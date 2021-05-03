const mongoose = require("mongoose");
const studentSchema= new mongoose.Schema({

        name:{
        type:"string",
        require: true
    },
    
    email:{
        type:"string",
        require: true
    },

    password:{
        type:"string",
        require: true
    },
    confirmpassword:{
        type:"string",
        require: true
    },
})

//create collection

const Register = new mongoose.model("Register",studentSchema)
module.exports = Register;
