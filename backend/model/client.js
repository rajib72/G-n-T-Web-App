import mongoose from "mongoose"

const Schema = mongoose.Schema

const clientSchema = new Schema({
    name:{
        type:String,
    },
    address:{
        type:String
    },
    projectHistory:[{
        type:mongoose.Types.ObjectId,
        ref:"projectHistory"
    }],
    project:[{
        type:String
    }],
    timesheet:[{
        type:mongoose.Types.ObjectId,
        ref:"timeSheet"
    }],
    staff:[{
        type:mongoose.Types.ObjectId,
        ref:"staff"
    }]
})

export default mongoose.model("client",clientSchema)
//in mongodb it will store as users