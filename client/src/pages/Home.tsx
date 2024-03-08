import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonDetail from "../components/PokemonDetail";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonPage } from "../services/pokeapi";
import PokemonItem from "../components/PokemonItem";
import { PokemonPageResult } from "../models/PokemonPage";
import getIdFromURL from "../utils/getPokemonId";
import { Pokemon } from "../models/Pokemon";

export default function Home() {
    // for pagination
    const PAGE_LIMIT = 131;
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonList, setPokemonList] = useState<PokemonPageResult[]>();

    // for pokemon detail
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

    useEffect(() => {
        getPokemonPage(currentPage).then((page) => {
            setPokemonList(page.results);
        });
    }, [currentPage]);

    const goToPrevious = async () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNext = async () => {
        setCurrentPage(currentPage + 1);
    };

    const handleSelectPokemon = async (pokemonName: string) => {
        getPokemon(pokemonName).then((pokemon) => setSelectedPokemon(pokemon));
    };

    return (
        <main className="h-100 bg-dark">
            <Navbar
                title="Gotta Catch 'em All"
                route="/inventory"
                routeName="Inventory"
            />
            <Container fluid className="p-3 h-100">
                <Row>
                    <Container className="col">
                        <form>
                            <input
                                disabled
                                className="form-control mb-2"
                                type="search"
                                placeholder="Type here..."
                                aria-label="Search input"
                            />
                        </form>
                        <div className="text-center">
                            <div className="btn-group">
                                <button
                                    onClick={() => goToPrevious()}
                                    type="button"
                                    className="btn btn-danger"
                                    disabled={currentPage <= 1}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => goToNext()}
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
                                    handleSelectPokemon={handleSelectPokemon}
                                />
                            ))}
                        </Container>
                    </Container>
                    <PokemonDetail pokemon={selectedPokemon!} />
                </Row>
            </Container>
        </main>
    );
}
