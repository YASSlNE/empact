import express from "express"
import { Request, Response } from "express"
import { dataSource } from "./app-data-source"



import bodyParser from "body-parser";

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
const port = 3000;
app.listen(port)
console.log( `server started at http://localhost:${ port }` );





app.use('/api', routes.userRouter);