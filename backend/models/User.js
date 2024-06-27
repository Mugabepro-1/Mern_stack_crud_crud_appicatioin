import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
        firstName:{
        type:String,
        required:true
    }, 
        lastName:{
        type:String,
        required:true
    }, 
       position:{
        type:String,
        required:true
    },
       company:{
        type:String,
        required:true
    },
        businArena:{
        type:String,
        required:true
    },
        employees:{
        type:Number,
        required:true
    },
        street:{
        type:String,
        required:true
    },
        addInfo:{
        type:String,
        required:true
    },
        zipCode:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})


const usermodel= mongoose.model('user',userSchema)

export default usermodel