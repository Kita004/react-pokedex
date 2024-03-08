import "../PokemonDetail.css";
import { Container } from "react-bootstrap";
import { SimplifiedPokemon, Pokemon } from "../models/Pokemon";
import getBackgroundByType from "../utils/getBackgroundByType";
import { useEffect, useState } from "react";
import { addPokemon, getInventory, deletePokemon } from "../services/inventory";

type PokemonDetailProps = {
    pokemon: Pokemon;
};

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
    // for catching/releasing pokemon
    const [pokemonFavs, setPokemonFavs] = useState<SimplifiedPokemon[]>([]);

    useEffect(() => {
        getInventory().then((res) => {
            setPokemonFavs(res);
        });
    }, []);

    // add pokemon to inventory
    const catchPokemon = () => {
        const SimplifiedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
        };
        addPokemon(SimplifiedPokemon).then(() =>
            setPokemonFavs([...pokemonFavs, SimplifiedPokemon])
        );
    };

    // delete pokemon from inventory by id
    const releasePokemon = () => {
        deletePokemon(pokemon.id)
            .then(() => {
                setPokemonFavs(
                    pokemonFavs.filter((fav) => fav.id !== pokemon.id)
                );
            })
            .catch((err) => console.log("ERRROR when deleting", err));
    };

    return (
        <Container
            className={
                "d-flex justify-content-center col-sm shadow rounded text-center " +
                getBackgroundByType(pokemon, "bg-white")
            }
        >
            {!pokemon ? (
                <div className="align-self-center">
                    <img src="./pokeball_icon.svg" />
                    <span className="text-uppercase">Select a pokemon</span>
                </div>
            ) : (
                <Container className="h-50">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width="475px"
                        height="475px"
                        className="img-fluid"
                    />
                    <Container className="responsive-text text-center">
                        <h1 className="text-uppercase">{pokemon.name}</h1>
                        <p>
                            Height: {pokemon.height / 10}m / Weight:{" "}
                            {pokemon.weight / 10}kg
                        </p>
                        <p>
                            Abilities:{" "}
                            {pokemon.abilities
                                .map((ability) => ability.ability.name)
                                .join(", ")
                                .replace("-", " ")}
                        </p>
                        <div>
                            {pokemonFavs.some(
                                (fav) => fav.name === pokemon.name
                            ) ? (
                                <button
                                    onClick={() => releasePokemon()}
                                    className="btn btn-light"
                                >
                                    RELEASE
                                </button>
                            ) : (
                                <button
                                    onClick={() => catchPokemon()}
                                    className="btn btn-light"
                                >
                                    CATCH
                                </button>
                            )}
                        </div>
                    </Container>
                </Container>
            )}
        </Container>
    );
}
