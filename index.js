import express from 'express'
import cors from 'cors'
import Route from "./route/route.js"

const app = express()
app.use(cors())
app.use(express.json)
app.use(Route)

app.listen(3000, ()=> console.log("Server Berjalan"))