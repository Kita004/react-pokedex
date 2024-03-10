import express from "express";
import Pokemon from "../Model/Pokemon.js";

const router = express.Router();

// get ALL caught pokemon names
router.get("/", async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (err) {
        console.error("ERROR when fetching pokemons: ", err);
        res.status(500).json({ message: err.message });
    }
});

// add pokemon to list
router.post("/add-pokemon", async (req, res) => {
    const pokemon = new Pokemon({
        id: req.body.id,
        name: req.body.name,
    });
    try {
        const newPokemon = await pokemon.save();
        res.status(200).send();
    } catch (err) {
        console.error("ERROR when adding pokemon: ", err);
        res.status(400).json({ message: err.message });
    }
});

// delete pokemon, using POST in order to hide data
router.post("/delete-pokemon", async (req, res) => {
    try {
        const pokemon = await Pokemon.findOneAndDelete({ id: req.body.id });
        if (pokemon) {
            res.status(200).send();
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.error("ERROR when deleting pokemon: ", err);
        res.status(500).json({ message: err.message });
    }
});

export { router as pokemonRouter };
