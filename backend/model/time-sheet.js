import mongoose from "mongoose";

const Schema = mongoose.Schema;

const timeSheetSchema = new Schema({
    project_name:{
        type:String,
    },
    phase_name:{
        type:String,
    },
    role:{
        type:String,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
})

export default mongoose.model("timeSheet",timeSheetSchema)