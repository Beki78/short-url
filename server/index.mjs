import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import Schema from "./models/urls.mjs";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newUrl = `http://localhost:3000/${id}`;

    console.log(`Searching for short URL: ${newUrl}`);

    const urlData = await Schema.findOne({ newUrl });

    if (!urlData) {
      console.log("Short URL not found");
      return res.status(404).send("Short URL not found");
    }

    console.log(`Redirecting to main URL: ${urlData.mainUrl}`);
    res.status(200).send(urlData.newUrl)
    res.redirect(urlData.mainUrl);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

app.post("/shorturls", async (req, res) => {
  try {
    const { mainUrl } = req.body;

    if (!mainUrl) {
      return res.status(400).json("It is not a valid URL");
    }

    const nanoId = nanoid(10);
    const newUrl = `http://localhost:3000/${nanoId}`;
    const post = await Schema.create({ mainUrl, newUrl });

    res.status(200).json({
      message: "Url created",
      newUrl: newUrl,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB is connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
