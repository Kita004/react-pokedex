import axios from "axios";
import { SimplifiedPokemon } from "../models/Pokemon";

const BASE_URL = "http://localhost:8081";

export const inventoryEndPoint = "/inventory"; // for dummy server
//export const inventoryEndPoint = "/api/inventory"; // for express

export async function getInventory() {
    const response = await axios.get(BASE_URL + inventoryEndPoint);
    return response.data;
}

// for express backend

/*
export async function addPokemon(pokemon: SimplifiedPokemon) {
    try {
        await axios.post(
            BASE_URL + inventoryEndPoint + "/add-pokemon",
            pokemon
        );
    } catch (error) {
        console.error("Error when adding pokemon", error);
        throw error;
    }
}

export async function deletePokemon(id: number) {
    try {
        await axios.post(BASE_URL + inventoryEndPoint + "/delete-pokemon", {
            id,
        });
    } catch (error) {
        console.error("Error when deleting pokemon", error);
        throw error;
    }
}
*/

// for dummy server

export async function addPokemon(pokemon: SimplifiedPokemon) {
    try {
        await axios.post(BASE_URL + inventoryEndPoint, pokemon);
    } catch (error) {
        console.error(error);
    }
}

export async function deletePokemon(id: number) {
    try {
        await axios.delete(`${BASE_URL}${inventoryEndPoint}/${id}`);
    } catch (error) {
        console.error(error);
    }
}
