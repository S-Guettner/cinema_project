import express  from "express"
import cors from 'cors'
import { readFile ,appendFile, writeFile } from "./fsHelper.js"
import './config.js'

import mongoose from "mongoose"
import seatSchema from './dataModul.js'


// server setup ===================================

const app = express()
app.use(express.json())

const PORT = process.env.PORT
const PORT_CLIENT = process.env.PORT_CLIENT.toString()

app.use(cors({origin: `http://localhost:${PORT_CLIENT}` }))





// routes setup ===================================

// send .json data to DB
app.post('/' , async(req,res) => {
    try {
        const seatsData = await seatSchema.create(req.body)
        res.status(200).json(seatsData)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})



// get data from DB

//.find({}) gets all data
app.get('/seats' , async(req,res) => {
    try {
        const seatsData = await seatSchema.find({})
        res.status(200).json(seatsData)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})

// get data from specific element from DB 

app.get('/seats/:id', async(req,res) => {
    try {
        const {id} = req.params
        const seatData = await seatSchema.findById(id)
        res.status(200).json(seatData)
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})



// DB setup ===================================

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASS = process.env.DB_PASS


mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASS}@cinemaprojectdb.nitzm3b.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT, () => console.log("Server running on PORT"+ " " + PORT + " 👍"))    
    console.log("Connected to DB 👍")
})
.catch((err) => console.log("ERROR - not able to connect to DB 👎"))




