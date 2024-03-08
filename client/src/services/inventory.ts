import axios from "axios";
import { SimplifiedPokemon } from "../models/Pokemon";

const BASE_URL = "http://localhost:8081";

export const inventoryEndPoint = "/inventory";

export async function getInventory() {
    const response = await axios.get(BASE_URL + inventoryEndPoint);
    return response.data;
}

// for express backend

export async function addPokemon(pokemon: SimplifiedPokemon) {
    try {
        const response = await axios.post(
            BASE_URL + inventoryEndPoint + "/add",
            pokemon
        );
    } catch (error) {
        console.error(error);
    }
}

export async function deletePokemon(id: number) {
    try {
        const response = await axios.post(
            BASE_URL + inventoryEndPoint + "/delete",
            id
        );
    } catch (error) {
        console.error(error);
    }
}

// for dummy server

/*
export async function addPokemon(pokemon: SimplifiedPokemon) {
    try {
        const response = await axios.post(
            BASE_URL + inventoryEndPoint,
            pokemon
        );
    } catch (error) {
        console.error(error);
    }
}

export async function deletePokemon(id: number) {
    try {
        const response = await axios.delete(
            `${BASE_URL}${inventoryEndPoint}/${id}`
        );
    } catch (error) {
        console.error(error);
    }
}
*/
