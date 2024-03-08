import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PokemonPage from "../components/PokemonPage";
import { getInventory } from "../services/inventory";
import PokemonDetail from "../components/PokemonDetail";

export default function Inventory() {
    //let caughtPokemonNames: string[] = [];

    /*useEffect(() => {
        getInventory().then((res) => {
            console.log(res.results);
        });
    }, []);*/

    return (
        <main>
            <Navbar title="Inventory" route="/" routeName="Home" />
            pokemon items
        </main>
    );
}
