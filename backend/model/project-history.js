import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectHistorySchema = new Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    client:{
        type:mongoose.Types.ObjectId,
        ref:"client"
    },
    startDate:{
        type:String
    }

})

export default mongoose.model("projectHistory",projectHistorySchema)