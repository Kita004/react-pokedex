import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonPage from "../components/PokemonPage";
import PokemonDetail from "../components/PokemonDetail";

export default function Home() {
    return (
        <main>
            <Navbar
                title="Gotta Catch 'em All"
                route="/inventory"
                routeName="Inventory"
            />
            <Container>
                <PokemonPage />
                <PokemonDetail />
            </Container>
        </main>
    );
}
