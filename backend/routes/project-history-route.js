import express from 'express'
import { addProject, deleteProject, getAllProjects, getById, getProjectByUser, updateProject } from '../controller/project-history-controller'
const projectsRouter = express.Router()

projectsRouter.get("/",getAllProjects)
projectsRouter.post("/add",addProject)
projectsRouter.put("/update/:id",updateProject)
projectsRouter.get("/:id",getById)
projectsRouter.delete("/:id",deleteProject)
projectsRouter.get('/user/:id',getProjectByUser)

export default projectsRouter;