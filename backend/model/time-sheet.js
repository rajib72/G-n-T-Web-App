import mongoose from "mongoose";

const Schema = mongoose.Schema;

const timeSheetSchema = new Schema({
    No:{
        type:String,
    },
    Role:{
        type:String,
    },
    EstTime:{
        type:String,
    }
})

export default mongoose.model("timeSheet",timeSheetSchema)