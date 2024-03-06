import express from "express";

const router = express.Router();

// get ALL caught pokemon names
router.get("/", async (req, res) => {
    try {
        // fetch then return list of names
    } catch (err) {
        console.error("ERROR when fetching pokemons: ", err);
    }
});

// update list
router.put("/update", (req, res) => {
    try {
        // update then return list of names
    } catch (err) {
        console.error("ERROR when updating pokemons: ", err);
    }
});

export { router as pokemonRouter };
