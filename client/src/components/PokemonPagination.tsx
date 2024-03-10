import { Container } from "react-bootstrap";
import PokemonItem from "./PokemonItem";
import getIdFromURL from "../utils/getPokemonId";
import { PokemonPage } from "../models/PokemonPage";

type PokemonPaginationProps = {
    goToPrevious: Function;
    goToNext: Function;
    pokemonPage: PokemonPage | undefined;
    handleSelectPokemon: Function;
};

export default function PokemonPagination({
    goToPrevious,
    goToNext,
    pokemonPage,
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
                            disabled={pokemonPage?.previous == null}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => goToNext()}
                            type="button"
                            className="btn btn-danger"
                            disabled={pokemonPage?.next == null}
                        >
                            Next
                        </button>
                    </div>
                </div>
                {pokemonPage?.results.map((pokemon) => (
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
