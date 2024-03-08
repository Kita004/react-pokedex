import { Container } from "react-bootstrap";
import PokemonItem from "./PokemonItem";
import getIdFromURL from "../utils/getPokemonId";
import { PokemonPageResult } from "../models/PokemonPage";

type PokemonPaginationProps = {
    goToPrevious: Function;
    goToNext: Function;
    currentPage: number;
    pokemonPage: PokemonPageResult[];
    PAGE_LIMIT: number;
    handleSelectPokemon: Function;
};

export default function PokemonPagination({
    goToPrevious,
    goToNext,
    currentPage,
    pokemonPage,
    PAGE_LIMIT,
    handleSelectPokemon,
}: PokemonPaginationProps) {
    return (
        <Container className="col">
            <Container>
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
