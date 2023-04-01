import express  from "express"
import cors from 'cors'
import './config.js'

const app = express()

const PORT = process.env.PORT
const PORT_CLIENT = process.env.PORT_CLIENT.toString()
app.use(cors({origin: `http://localhost:${PORT_CLIENT}` }))










app.listen(PORT, () => console.log("Server läuft auf PORT"+ " " + PORT + " 👍"))