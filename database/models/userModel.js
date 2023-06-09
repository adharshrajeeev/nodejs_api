import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type:String,
       
    },
    isBlocked:{
        type:Boolean,
        default:false
    },

},{timestamps:true})

const User = mongoose.model('User', UserSchema);
export default User