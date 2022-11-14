import * as express from "express"
import { Request, Response } from "express"
import { dataSource } from "./app-data-source"

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
app.use(express.json())


// start express server
const port = 3000;
app.listen(port)
console.log( `server started at http://localhost:${ port }` );
