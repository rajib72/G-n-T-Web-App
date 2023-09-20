import express from "express"
import { getAllStaff } from "../controller/staff-controller";


const staffrouter = express.Router()

staffrouter.get("/",getAllStaff)

export default staffrouter;