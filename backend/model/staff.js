import mongoose from "mongoose"

const Schema = mongoose.Schema

const staffSchema = new Schema({
    name:{
        type:String,
    },
    address:{
        type:String
    },
    documents:[{
        type:String
    }],
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
    timeLog:[{
        type:String
    }],
    client:[{
        type:String
    }],
    feedback:[{
        type:String
    }]
})

export default mongoose.model("staff",staffSchema)
//in mongodb it will store as users