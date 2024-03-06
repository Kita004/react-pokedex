import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { pokemonRouter } from "./Router/pokemonRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

// mongoose
//     .connect(process.env.ATLAS_URI)
//     .then(() => console.info("MongoDB is connected!"))
//     .catch((err) => console.info("ERROR when connecting to mongoDB", err));

app.use("/api/pokemons", pokemonRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("*", function (req, res) {
    res.send("Invalid URL.");
});

app.listen(8081, () => console.info("SERVER STARTED!"));
