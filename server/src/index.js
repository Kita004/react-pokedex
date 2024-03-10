import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { pokemonRouter } from "./Router/pokemonRouter.js";

// load environment
dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
const whitelist = ["http://localhost:5173"];
app.use(
    cors({
        origin: whitelist,
        methods: ["GET", "POST", "DELETE"],
        credentials: false,
    })
);

mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => console.info("MongoDB is connected!"))
    .catch((err) => console.info("ERROR when connecting to mongoDB", err));

app.use("/api/inventory", pokemonRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("*", function (req, res) {
    res.send("Invalid URL...");
});

app.listen(8081, () => console.info("SERVER STARTED!"));
