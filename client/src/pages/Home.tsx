import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonDetail from "../components/PokemonDetail";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonPage } from "../services/pokeapi";
import PokemonPagination from "../components/PokemonPagination";
import { PokemonPageResult } from "../models/PokemonPage";
import getIdFromURL from "../utils/getPokemonId";
import { Pokemon, SimplifiedPokemon } from "../models/Pokemon";
import PokemonItem from "../components/PokemonItem";

export default function Home() {
    // for pagination
    const PAGE_LIMIT = 131;
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPage, setPokemonPage] = useState<PokemonPageResult[]>();

    // for pokemon detail
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

    // for search
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchedPokemon, setSearchedPokemon] =
        useState<SimplifiedPokemon | null>();

    useEffect(() => {
        getPokemonPage(currentPage).then((page) => {
            setPokemonPage(page.results);
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

    const handleSearchTerm = (term: string) => {
        if (term && term !== " ") {
            setSearchTerm(term);
        } else {
            setSearchTerm("");
            setSearchedPokemon(null);
        }
    };

    const handleSearchPokemon = async () => {
        getPokemon(searchTerm).then((pokemon) => setSearchedPokemon(pokemon));
    };

    return (
        <main className="min-vh-100 bg-dark">
            <Navbar
                title="Gotta Catch 'em All"
                route="/inventory"
                routeName="Inventory"
            />
            <Container fluid className="p-4">
                <Row>
                    <Container className="col">
                        <div className="input-group mb-2">
                            <button
                                onClick={() => handleSearchPokemon()}
                                className="btn btn-danger"
                            >
                                Search
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                onChange={(ev) =>
                                    handleSearchTerm(ev.currentTarget.value)
                                }
                            />
                        </div>
                        {searchTerm && searchedPokemon ? (
                            <PokemonItem
                                name={searchedPokemon.name}
                                id={String(searchedPokemon.id)}
                                handleSelectPokemon={handleSelectPokemon}
                            />
                        ) : (
                            <PokemonPagination
                                goToPrevious={goToPrevious}
                                goToNext={goToNext}
                                currentPage={currentPage}
                                pokemonPage={pokemonPage!}
                                PAGE_LIMIT={PAGE_LIMIT}
                                handleSelectPokemon={handleSelectPokemon}
                            />
                        )}
                    </Container>
                    <PokemonDetail pokemon={selectedPokemon!} />
                </Row>
            </Container>
        </main>
    );
}
