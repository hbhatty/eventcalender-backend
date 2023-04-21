import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import express from 'express';
import  {eventsRouter} from "./routes/events.js";
//use express
const app = express();


//configs our dev path for our env
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
const host = process.env.HOST_NAME
const port = process.env.PORT_NUM
//just a setting i guess?
mongoose.set("strictQuery", true)

//
app.use(express.urlencoded({extended:true}))
//allows use to access request body
app.use(bodyParser.json())
// lets us make requests to our mongodb backend
app.use(cors())

app.use("/events", eventsRouter) 

//connect our db async
const db = async () => {
    console.log(`Connecting to db: ${process.env.DB_URL}`)
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log(`Database connected at: ${process.env.DB_URL}`)

    }catch(error){
        console.log(`Database error: ${error.message}`)
    }
}
//call function
db();

const server = app.listen(port, host ,() => {
    const SERVERHOST = server.address().address
    const SERVERPORT = server.address().port 
    console.log(`Server is connected at address ${SERVERHOST} and port ${SERVERPORT}`)
})
