import { getPokemon } from "../services/pokeapi";

export default async function usePokemon(name: string) {
    try {
        const pokemon = await getPokemon(name);
        return pokemon;
    } catch (err) {
        console.error("Error when loading pokemon", err);
        return null;
    }
}

/*
import { getPokemon } from "../services/pokeapi";

export default async function usePokemon(name: string) {
    try {
        const localStorageValue = localStorage.getItem(name);
        if (localStorageValue !== null) {
            const stringifiedValue = JSON.stringify(localStorageValue);
            return JSON.parse(stringifiedValue);
        } else {
            const pokemon = await getPokemon(name);
            localStorage.setItem(name, JSON.stringify(pokemon));
            return pokemon;
        }
    } catch (err) {
        console.error("Error when loading pokemon", err);
        return null;
    }
}
*/
