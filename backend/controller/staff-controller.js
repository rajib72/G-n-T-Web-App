import Staff from "../model/staff";

//get all staff
export const getAllStaff = async(req,res,next)=>{
    let staffs;
    try {
        staffs = await Staff.find()
    } catch (error) {
        console.log(error);
    }
    if(!staffs){
        return res.status(404).json({message: "No staff Found"})
    }
    return res.status(200).json({staffs})
}