import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";



dotenv.config()
const app = express()
dbCon()
app.use(cors())
app.use(express.json())
app.use('/api', routers)


const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})