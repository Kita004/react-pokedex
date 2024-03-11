import { Container } from "react-bootstrap";
import PokemonItem from "./PokemonItem";
import getIdFromURL from "../utils/getPokemonId";
import { PokemonPageResult } from "../models/PokemonPage";
import { useEffect, useState } from "react";

type PokemonPaginationProps = {
    PAGE_SIZE: number;
    pokemons: PokemonPageResult[] | undefined;
    handleSelectPokemon: Function;
};

export default function PokemonPagination({
    PAGE_SIZE,
    pokemons,
    handleSelectPokemon,
}: PokemonPaginationProps) {
    const [pokemonPage, setPokemonPage] = useState<PokemonPageResult[]>();
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_LIMIT = pokemons?.length / PAGE_SIZE || 131;

    const goToPrevious = async () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNext = async () => {
        setCurrentPage(currentPage + 1);
    };

    const paginatePokemons = (pokemonList: PokemonPageResult[] | undefined) => {
        const page = pokemonList?.slice(
            (currentPage - 1) * PAGE_SIZE,
            currentPage * PAGE_SIZE
        );
        setPokemonPage(page);
    };

    useEffect(() => {
        paginatePokemons(pokemons);
    }, [pokemons, currentPage]);

    return (
        <Container className="col">
            <Container>
                <div className="text-center">
                    <div className="btn-group">
                        <button
                            onClick={() => goToPrevious()}
                            type="button"
                            className="btn btn-danger"
                            disabled={currentPage == 1}
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
                {pokemonPage?.map((pokemon) => (
                    <PokemonItem
                        key={pokemon.name}
                        name={pokemon.name}
                        id={getIdFromURL(pokemon.url)}
                        handleSelectPokemon={handleSelectPokemon}
                    />
                ))}
            </Container>
        </Container>
    );
}
