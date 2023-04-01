import express  from "express"
import cors from 'cors'
import { readFile } from "./fsHelper.js"
import './config.js'

const app = express()
/* app.express.json() */

const PORT = process.env.PORT
const PORT_CLIENT = process.env.PORT_CLIENT.toString()
app.use(cors({origin: `http://localhost:${PORT_CLIENT}` }))

// get seat status
app.get("/api/v1/getSeats", (req, res) => {
    readFile()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})












app.listen(PORT, () => console.log("Server läuft auf PORT"+ " " + PORT + " 👍"))