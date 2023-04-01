import express  from "express"
import cors from 'cors'
import { readFile ,appendFile, writeFile } from "./fsHelper.js"
import './config.js'
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


app.patch("/api/v1/getSeats/:seatNumber", (req,res) => {

    const {seatNumber} = req.params
    /* console.log(seatNumber) */
    let searchedSeat 

    readFile()
    .then(data => data.find((item)=> {
        if(item.seatNumber == seatNumber){
            item.seatStatus = !item.seatStatus
            /* console.log(item.seatStatus) */


            /* res.json(item)  */
            res.end()
        }
    }))
    
    
})







app.listen(PORT, () => console.log("Server läuft auf PORT"+ " " + PORT + " 👍"))