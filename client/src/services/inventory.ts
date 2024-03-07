import axios from "axios";

const BASE_URL = "http://localhost:8081";

export async function getInventory() {
    const response = await axios.get(BASE_URL + "/pokemons");
    return response.data;
}
