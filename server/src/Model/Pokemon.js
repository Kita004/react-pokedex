import mongoose, { Schema } from "mongoose";

const { schema, model } = mongoose;

const pokemonSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
});

const Pokemon = model("Pokemon", pokemonSchema);
export default Pokemon;
