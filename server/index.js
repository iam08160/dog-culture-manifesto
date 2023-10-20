require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { PORT, MONGO } = process.env;

mongoose.connect(`${MONGO}/DogCultureDev`);
const db = mongoose.connection;
// db.on('error'), (err) => console.error((err))
db.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
