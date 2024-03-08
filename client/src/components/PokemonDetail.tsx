import "../PokemonDetail.css";
import { Container } from "react-bootstrap";
import { Pokemon } from "../models/Pokemon";
import getBackgroundByType from "../utils/getBackgroundByType";

type PokemonDetailProps = {
    pokemon: Pokemon;
};

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
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
                    <Container className="h-100 responsive-text text-center">
                        <h1 className="text-uppercase">{pokemon.name}</h1>
                        <p>
                            Height: {pokemon.height / 10}m / Weight:{" "}
                            {pokemon.weight / 10}kg
                        </p>
                        <p>Abilities</p>
                        <ul className="p-0 m-0">
                            {pokemon.abilities.map((ability) => (
                                <li key={ability.ability.name}>
                                    {ability.ability.name.replace("-", " ")}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-light">RELEASE</button>
                    </Container>
                </Container>
            )}
        </Container>
    );
}
