import mongoose from "mongoose"

const Schema = mongoose.Schema

const timelogSchema = new Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    loggedHours:{
        type:String
    },
    Date:{
        type:String
    },
    Time:{
        type:String
    },
    staff:{
        type:mongoose.Types.ObjectId,
        ref:"staff"
    }

})

export default mongoose.model("timelog",timelogSchema)
//in mongodb it will store as users