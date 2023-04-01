import express  from "express"
import cors from 'cors'
import { readFile ,appendFile, writeFile } from "./fsHelper.js"
import './config.js'

import mongoose from "mongoose"


import seatData from './seatData.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
}

const app = express()
app.use(express.json())

const PORT = process.env.PORT
const PORT_CLIENT = process.env.PORT_CLIENT.toString()
app.use(cors({origin: `http://localhost:${PORT_CLIENT}` }))

// get seat status
app.get("/api/v1/getSeats", (req, res) => {
    readFile()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

app.get("/api/v1/getSeats/:seatNumber", (req,res) => {
    res.send(`get id route with params ${req.params.seatNumber}`)
})


const DB_USERNAME = process.env.DB_USERNAME
const DB_PASS = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASS}@cinemaprojectdb.nitzm3b.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT, () => console.log("Server running on PORT"+ " " + PORT + " 👍"))    
    console.log("Connected to DB 👍")
})
.catch((err) => console.log("ERROR - not able to connect to DB 👎"))



