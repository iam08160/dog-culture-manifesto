require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { PORT, MONGO } = process.env;

mongoose.connect(`${MONGO}DogCultureDev`);
const db = mongoose.connection;

// *error handling - fix this
// db.on('error'), (err) => console.error((err))

db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const users = require("./controllers/userController");

app.use("/user", users);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
