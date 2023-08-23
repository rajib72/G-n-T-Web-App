import mongoose from "mongoose";
import User from "../model/User";
import projectHistory from "../model/project-history";

//to get all projects
export const getAllProjects = async(req,res,next)=>{
    let projects;
    try {
        projects = await projectHistory.find()
    } catch (error) {
        console.log(error);
    }
    if(!projects){
        return res.status(404).json({message: "No Projects Found"})
    }
    return res.status(200).json({projects})
}

//create a project
export const addProject = async(req,res,next)=>{
    const {title,description,reference,user} = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        console.log(error);
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to find user"})
    }

    const project = new projectHistory({
        title,description,reference,user,
    });
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await project.save({session})
        existingUser.project.push(project)//sending the project to the user's project array
        await existingUser.save({session})//saving the user
        await session.commitTransaction()//the transaction would be committed
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({project})
}

//update a project
export const updateProject = async(req,res,next)=>{
    const {title,description} = req.body;
    const projectId = req.params.id;

    let project;
    try {
        project = await projectHistory.findByIdAndUpdate(projectId,{
            title,
            description
        })
    } catch (error) {
        console.log(error);
    }
    if(!project){
        return res.status(500).json({message: "Unable to update the project History"})
    }
    return res.status(200).json({project})
    
}

//get project by id
export const getById = async(req,res,next)=>{
    const id = req.params.id
    let project;
    try {
        project = await projectHistory.findById(id)
    } catch (error) {
        console.log(error);
    }
    if(!project){
        return res.status(404).json({message: "No Projects Found"})
    }
    return res.status(200).json({project})
}

//delete a project
export const deleteProject = async(req,res,next)=>{
    const id = req.params.id;

    let project;
    try {
        project = await projectHistory.findByIdAndRemove(id).populate('user')//it will find the project and also from the user
        await project.user.project.pull(project)//removing the project from user array
        await project.user.save()
    } catch (error) {
        console.log(error);
    }
    if(!project){
        return res.status(500).json({message: "Unable to delete"})
    }
    return res.status(200).json({message: "Successfully deleted"})

}

//get project by user Id
export const getProjectByUser = async(req,res,next)=>{
    const userId = req.params.id;
    let userProject;
    try {
        userProject = await User.findById(userId).populate("project")
    } catch (error) {
        console.log(error);
    }
    if(!userProject){
        return res.status(404).json({message: "Unable to find projects"})
    }
    return res.status(200).json({projects:userProject})
}