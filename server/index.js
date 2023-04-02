import express  from "express"
import cors from 'cors'
// .env import
import './env_config.js'

import mongoose from "mongoose"
import seatSchema from './dataModul.js'

import mailSender from './nodeMailer.js'

//changing app.js to index.js fixed deployment problem


// server setup ===================================

const app = express()
app.use(express.json())

const PORT = process.env.PORT
const PORT_CLIENT = process.env.PORT_CLIENT.toString()

app.use(cors(
    {
        origin: 'https://cinema-project-vtqv.vercel.app',
        methods: ['GET', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        preflightContinue: true,
        optionsSuccessStatus: 204
    }
    ))





// routes setup ===================================

// send .json data to DB

/* only needed for sending data to DB */
/* app.post('/api/v1/send' , async(req,res) => {
    try {
        const seatsData = await seatSchema.create(req.body)
        res.status(200).json(seatsData)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})
 */


// get data from DB

//.find({}) gets all data
app.get('/api/v1/seats' , async(req,res) => {
    try {
        const seatsData = await seatSchema.find({})
        res.status(200).json(seatsData)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})


// get data from specific element from DB 

app.get('/api/v1/seats/:id', async(req,res) => {
    try {
        const {id} = req.params
        const seatData = await seatSchema.findById(id)
        res.status(200).json(seatData)
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})


// change data in DB

app.put('api/v1/seats/update/:id', async(req,res) => {
    try {
        const {id} = req.params
        const seatData = await seatSchema.findByIdAndUpdate(id , req.body)
        //err
        if(!seatData){
            return res.status(404).json({message: 'cannot find searched id'})
        }else{
            const updated = await seatSchema.findById(id)
            res.status(200).json(updated)
        }
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: "cannot found id "})
    }
})


// change all bookedSeats to false

app.put('/api/v1/seats/reset_all', async(req,res) => {
    try {
        /* const {id} = req.params */
        const seatData = await seatSchema.updateMany({"seatBooked": true} , {$set: {"seatBooked":false}})
        
           /*  const updated = await seatSchema.findById(id) */
            res.status(200).json(seatData)
        
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})


// nodemail

app.post('/api/v1/send_mail', (req,res) => {
    try {
        const content = req.body
        // nodemail function
        mailSender(content)
        res.status(200).json({message:"mail was sent"})
        
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




