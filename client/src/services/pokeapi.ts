import axios from "axios";
import { Pokemon } from "../models/Pokemon";
import { PokemonPage } from "../models/PokemonPage";

const BASE_URL = "https://pokeapi.co/api/v2";

// cache keys for SWR
export const pokemonPageCacheKey = "/pokemonPage";
export const pokemonDetailCacheKey = "/pokemon";

export async function getAllPokemon() {
    const response = await axios.get<PokemonPage>(
        BASE_URL + "/pokemon?limit=9999&offset=0"
    );
    return response.data;
}

export async function getPokemonPage(page: number) {
    const pageSize = 10;
    const response = await axios.get<PokemonPage>(
        BASE_URL + `/pokemon?limit=${pageSize}&offset=${(page - 1) * pageSize}`
    );
    return response.data;
}

export async function getPokemon(name: string) {
    const response = await axios.get<Pokemon>(BASE_URL + "/pokemon/" + name);
    return response.data;
}
