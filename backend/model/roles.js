import mongoose from "mongoose"

const Schema = mongoose.Schema

const roleSchema = new Schema({
    name:{
        type:String,
    },
    resouce:[{
        type:mongoose.Types.ObjectId,
        ref:"resource"
    }]

})

export default mongoose.model("role",roleSchema)
//in mongodb it will store as users