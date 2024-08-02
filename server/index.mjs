import express from "express"
import dotenv from "dotenv"
import {nanoid} from "nanoid"
import Schema from "./models/urls.mjs"
dotenv.config()
const app = express()



app.get("/shorturls", (req, res) => {

});

app.post("/shorturls", (req, res) => {
    const nanoId = nanoid(10)
    const body = req.body
    const newUrl = `http://localhost:3000/${nanoId}`;
    res.status(200).json(body)
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})