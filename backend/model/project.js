import mongoose from "mongoose"

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    startDate:[{
        type:String
    }],
    endDate:[{
        type:String
    }],
    status:{
        type:String
    },
    estimatedHours:{
        type:String
    },
    client:[{
        type:String
    }],
    phase:[{
        type:String
    }],

})

export default mongoose.model("project",projectSchema)
//in mongodb it will store as users