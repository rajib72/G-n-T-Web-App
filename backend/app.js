import express from "express"
import mongoose from "mongoose"
import router from "./routes/user-routes"
import projectsRouter from "./routes/project-history-route"
import timeSheetRouter from "./routes/time-sheet-route"



const app = express()
app.use(express.json())

app.use("/api/user",router)
app.use("/api/projects",projectsRouter)
app.use("/api/timesheet",timeSheetRouter)

mongoose.connect('mongodb+srv://rsarkar:rsarkar%4072@rajib.zmlmcop.mongodb.net/?retryWrites=true&w=majority')
.then(()=>app.listen(5000)).then(()=>console.log("Connected to database port 5000"))
.catch((e)=>console.log(e))
