import Navbar from "../components/Navbar";
import PokemonPage from "../components/PokemonPage";

export default function Inventory() {
    return (
        <main>
            <Navbar title="Inventory" route="/" routeName="Home" />
            <PokemonPage />
        </main>
    );
}
