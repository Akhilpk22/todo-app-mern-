const mongoose =require('mongoose')
const validator = require('validator')

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,'must be at least 3 ,got {VALUE}']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(){
            if(!validator.isEmail(value)){
                throw new Error("invalid email ")
            }
        }
    },
    password:{
        type:String,
        required:true
    }
})





const users = mongoose.model("users",userSchema)
module.exports = users