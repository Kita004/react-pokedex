import { Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import PokemonDetail from "../components/PokemonDetail";
import { useState } from "react";
import {
    getPokemon,
    pokemonPageCacheKey,
    getAllPokemon,
} from "../services/pokeapi";
import PokemonPagination from "../components/PokemonPagination";
import { Pokemon } from "../models/Pokemon";
import useSWR from "swr";
import PokeballSpinner from "../components/PokeballSpinner";
import { PokemonPageResult } from "../models/PokemonPage";

export default function Home() {
    // for pagination
    const PAGE_SIZE = 10;
    const { data: pokemonsSWR, isLoading } = useSWR(pokemonPageCacheKey, () =>
        getAllPokemon()
    );

    // for pokemon detail
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

    // for search
    const [filteredPokemon, setFilteredPokemon] = useState<
        PokemonPageResult[] | null
    >();

    const handleSelectPokemon = async (pokemonName: string) => {
        getPokemon(pokemonName).then((res) => setSelectedPokemon(res));
    };

    const handleSearchPokemon = (term: string) => {
        if (term && term !== " ") {
            const filteredPokemon = pokemonsSWR?.results.filter((data) =>
                data.name.includes(term)
            );
            setFilteredPokemon(filteredPokemon);
        } else {
            setFilteredPokemon(null);
        }
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
                            <input
                                className="form-control"
                                type="text"
                                onChange={(ev) =>
                                    handleSearchPokemon(ev.currentTarget.value)
                                }
                            />
                        </div>
                        {filteredPokemon ? (
                            <div>
                                <PokemonPagination
                                    pokemons={filteredPokemon}
                                    PAGE_SIZE={PAGE_SIZE}
                                    handleSelectPokemon={handleSelectPokemon}
                                />
                            </div>
                        ) : isLoading ? (
                            <div className="vh-100">
                                <PokeballSpinner />
                            </div>
                        ) : (
                            <PokemonPagination
                                pokemons={pokemonsSWR?.results}
                                PAGE_SIZE={PAGE_SIZE}
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
