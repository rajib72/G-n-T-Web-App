import express from 'express'
import { addTimeSheet, getTimeSheet } from '../controller/time-sheet-controller'

const timeSheetRouter = express.Router()

timeSheetRouter.get("/",getTimeSheet)
timeSheetRouter.post("/add",addTimeSheet)

export default timeSheetRouter;