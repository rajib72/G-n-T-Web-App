import mongoose from "mongoose";
import User from "../model/User";
import timeSheet from "../model/time-sheet";

//to get all time sheet
export const getTimeSheet = async(req,res,next)=>{
    let time_Sheet;
    try {
        time_Sheet = await timeSheet.find();
    } catch (error) {
        console.log(error);
    }
    if(!time_Sheet){
        return res.status(404).json({message: "No Time Sheet Found"})
    }
    return res.status(200).json({time_Sheet})
}

//create a time sheet
export const addTimeSheet = async(req,res,next)=>{
    const {project_name,phase_name,role,user} = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        console.log(error);
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to find user"})
    }

    const time_Sheet = new timeSheet({
        project_name,phase_name,role,user,
    });
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await time_Sheet.save({session})
        existingUser.timesheet.push(time_Sheet)//sending the time sheet to the user's time sheet array
        await existingUser.save({session})//saving the user
        await session.commitTransaction()//the transaction would be committed
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({time_Sheet})
}