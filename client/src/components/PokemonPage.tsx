import { Container } from "react-bootstrap";
import PokemonItem from "./PokemonItem";
import { Pokemon } from "../models/Pokemon";
import { PokemonPageResult } from "../models/PokemonPage";
import getIdFromURL from "../utils/getPokemonId";

type PokemonPageProps = {
    //pokemons: Pokemon[];
    pokemonList: PokemonPageResult[];
};

export default function PokemonPage({ pokemonList }: PokemonPageProps) {
    return (
        <Container>
            <div>
                <form>
                    <input
                        disabled
                        className="form-control w-50"
                        type="search"
                        placeholder="Type here..."
                        aria-label="Search input"
                    />
                </form>
            </div>
            <div className="text-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" disabled>
                        Previous
                    </button>
                    <button type="button" className="btn btn-primary" disabled>
                        Next
                    </button>
                </div>
            </div>
            {/* {pokemonList?.map((pokemon) => (
                        <PokemonItem
                            key={pokemon.name}
                            name={pokemon.name}
                            id={getIdFromURL(pokemon.url)}
                            setSelectedPokemon={}
                        /> 
                    ))}*/}
        </Container>
    );
}
