import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    // projectHistory:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:"projectHistory"
    // }],
    // timesheet:[{
    //     type:mongoose.Types.ObjectId,
    //     ref:"timeSheet"
    // }],
    client:[{
        type:String,
    }],
    staff:[{
        type:String,
    }]
})

export default mongoose.model("User",userSchema)
//in mongodb it will store as users