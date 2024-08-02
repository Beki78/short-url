import express from "express"
import dotenv from "dotenv"
const app = express()


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})