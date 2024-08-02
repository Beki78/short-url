import mongoose from "mongoose";

const URLSCHEMA = new mongoose.Schema({
    mainUrl:{
        type: String,
        require: true
    },
    newUrl:{
        type: String,
        require: true
    }
})
const Schema = mongoose.model("UrlSchema", URLSCHEMA);
export default Schema