import express from "express"
import { dataSource } from "./app-data-source"
import * as dotenv from 'dotenv'
dotenv.config()

import routes from './routes';



// establish database connection
dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


// create and setup express app
const app = express()
app.use(express.json());


// start express server
const port = 4444;
app.listen(port)
console.log( `server started at http://localhost:${ port }` );





app.use('/api', routes.userRouter);
app.use('/events', routes.eventsRouter);