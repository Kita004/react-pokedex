import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonPage from "../components/PokemonPage";
import PokemonDetail from "../components/PokemonDetail";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonPage } from "../services/pokeapi";
import { Pokemon } from "../models/Pokemon";

export default function Home() {
    // for searching
    //let allPokemonNamesEver: string[] = [];

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    let pokemons: Pokemon[] = [];

    useEffect(() => {
        getPokemonPage(currentPage).then((res) =>
            res.results.forEach((pageData) => {
                getPokemon(pageData.name).then((pokemon) => {
                    pokemons.push(pokemon);
                });
            })
        );
    }, []);

    return (
        <main>
            <Navbar
                title="Gotta Catch 'em All"
                route="/inventory"
                routeName="Inventory"
            />
            <Container fluid className="d-flex m-0 p-0">
                <PokemonPage pokemons={pokemons} />
                <PokemonDetail />
            </Container>
        </main>
    );
}
