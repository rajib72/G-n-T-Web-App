import mongoose from "mongoose"

const Schema = mongoose.Schema

const resourceSchema = new Schema({
    name:{
        type:String,
    },
    phaseName:{
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
    phase:{
        type:mongoose.Types.ObjectId,
        ref:"phase"
    },
    roles:{
        type:String
    },
    staff:{
        type:mongoose.Types.ObjectId,
        ref:"staff"
    }

})

export default mongoose.model("resource",resourceSchema)
//in mongodb it will store as users