import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonDetail from "../components/PokemonDetail";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonPage } from "../services/pokeapi";
import PokemonItem from "../components/PokemonItem";
import { PokemonPage, PokemonPageResult } from "../models/PokemonPage";
import getIdFromURL from "../utils/getPokemonId";

export default function Home() {
    // for pagination
    const PAGE_LIMIT = 131;
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonList, setPokemonList] = useState<PokemonPageResult[]>();

    // for pokemon detail
    const [selectedPokemon, setSelectedPokemon] = useState();

    useEffect(() => {
        getPokemonPage(currentPage).then((page) => {
            setPokemonList(page.results);
        });
    }, [currentPage]);

    return (
        <main>
            <Navbar
                title="Gotta Catch 'em All"
                route="/inventory"
                routeName="Inventory"
            />
            <Container fluid className="d-flex m-0 p-0">
                <Container>
                    <form>
                        <input
                            disabled
                            className="form-control mt-2 mb-2"
                            type="search"
                            placeholder="Type here..."
                            aria-label="Search input"
                        />
                    </form>
                    <div className="text-center">
                        <div className="btn-group">
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                type="button"
                                className="btn btn-danger"
                                disabled={currentPage <= 1}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                type="button"
                                className="btn btn-danger"
                                disabled={currentPage >= PAGE_LIMIT}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <Container>
                        {pokemonList?.map((pokemon) => (
                            <PokemonItem
                                key={pokemon.name}
                                name={pokemon.name}
                                id={getIdFromURL(pokemon.url)}
                                setSelectedPokemon={setSelectedPokemon}
                            />
                        ))}
                    </Container>
                </Container>
                <PokemonDetail />
            </Container>
        </main>
    );
}
