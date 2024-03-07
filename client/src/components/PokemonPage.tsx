import { Container } from "react-bootstrap";
import PokemonItem from "./PokemonItem";
import { useState } from "react";
import { getPokemon } from "../services/pokeapi";
import { Pokemon } from "../models/Pokemon";

type PokemonPageProps = {
    pokemons: Pokemon[];
};

export default function PokemonPage({ pokemons }: PokemonPageProps) {
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
            {pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ))}
        </Container>
    );
}
