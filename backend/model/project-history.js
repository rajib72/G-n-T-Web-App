import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    reference:{
        type:String,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
})

export default mongoose.model("projectHistory",projectSchema)