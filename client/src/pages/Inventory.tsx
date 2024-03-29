import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
    getInventory,
    inventoryEndPoint as inventoryCacheKey,
} from "../services/inventory";
import { Container } from "react-bootstrap";
import { Pokemon } from "../models/Pokemon";
import PokemonItem from "../components/PokemonItem";
import useSWR from "swr";

export default function Inventory() {
    const { data: pokemonsSWR, isLoading } = useSWR(
        inventoryCacheKey,
        getInventory,
        { onSuccess: (data) => paginatePokemons(data) }
    );

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPage, setPokemonPage] = useState<Pokemon[]>([]);
    const PAGE_SIZE = 10;
    const PAGE_MAX = Math.ceil(pokemonsSWR?.length / PAGE_SIZE);

    useEffect(() => {
        paginatePokemons(pokemonsSWR);
    }, [currentPage]);

    const paginatePokemons = (pokemonList: Pokemon[]) => {
        const page = pokemonList?.slice(
            (currentPage - 1) * PAGE_SIZE,
            currentPage * PAGE_SIZE
        );
        setPokemonPage(page);
    };

    return (
        <main className="min-vh-100 bg-dark">
            <Navbar title="Inventory" route="/" routeName="Home" />
            {isLoading && (
                <div className="flex-column text-center mt-5">
                    <div>
                        {[...Array(6)].map((item, i) => (
                            <img
                                key={i}
                                src="./pokeball_icon.svg"
                                alt="pokeball-spinner"
                                height={50}
                                width={50}
                            />
                        ))}
                    </div>
                    <h3 className="text-light">
                        No pokemons here, take these and catch some :)
                    </h3>
                </div>
            )}
            <Container>
                <div className="text-center">
                    <div className="btn-group mt-4">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            type="button"
                            className="btn btn-danger"
                            disabled={currentPage <= 1}
                            hidden={!pokemonsSWR?.length}
                        >
                            Previous
                        </button>

                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            type="button"
                            className="btn btn-danger"
                            disabled={currentPage >= PAGE_MAX}
                            hidden={!pokemonsSWR?.length}
                        >
                            Next
                        </button>
                    </div>
                </div>

                {pokemonPage?.map((pokemon: Pokemon) => (
                    <PokemonItem
                        key={pokemon.name}
                        name={pokemon.name}
                        id={String(pokemon.id)}
                    />
                ))}
            </Container>
        </main>
    );
}
