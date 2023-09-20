import mongoose from "mongoose"

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    projectName:{
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
    actualHours:{
        type:String
    },
    remainingHours:{
        type:String
    },
    project:{
        type:mongoose.Types.ObjectId,
        ref:"project"
    },
    resource:[{
        type:String
    }]

})

export default mongoose.model("phase",phaseSchema)
//in mongodb it will store as users