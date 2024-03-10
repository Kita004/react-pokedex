import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonDetail from "../components/PokemonDetail";
import { useState } from "react";
import {
    getPokemon,
    getPokemonPage,
    pokemonPageCacheKey,
    pokemonDetailCacheKey,
} from "../services/pokeapi";
import PokemonPagination from "../components/PokemonPagination";
import { Pokemon, SimplifiedPokemon } from "../models/Pokemon";
import PokemonItem from "../components/PokemonItem";
import useSWR from "swr";
import PokeballSpinner from "../components/PokeballSpinner";

export default function Home() {
    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const { data: pokemonPageSWR, isLoading } = useSWR(
        [pokemonPageCacheKey, currentPage],
        () => getPokemonPage(currentPage)
    );

    // for pokemon detail
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

    // for search
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchedPokemon, setSearchedPokemon] =
        useState<SimplifiedPokemon | null>();

    const goToPrevious = async () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNext = async () => {
        setCurrentPage(currentPage + 1);
    };

    const handleSelectPokemon = async (pokemonName: string) => {
        getPokemon(pokemonName).then((res) => setSelectedPokemon(res));
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
        await getPokemon(searchTerm).then((pokemon) =>
            setSearchedPokemon(pokemon)
        );
    };

    return (
        <main className="min-vh-100 bg-dark">
            <Navbar
                title="Gotta Catch 'em All"
                route="/inventory"
                routeName="Inventory"
            />
            <Container fluid className="p-4 h-100">
                <Row>
                    <Container className="col h-100">
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
                        ) : isLoading ? (
                            <div className="vh-100">
                                <PokeballSpinner />
                            </div>
                        ) : (
                            <PokemonPagination
                                goToPrevious={goToPrevious}
                                goToNext={goToNext}
                                pokemonPage={pokemonPageSWR}
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
