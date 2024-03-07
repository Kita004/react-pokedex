import { useState } from "react";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "../models/Pokemon";
import { getPokemon } from "../services/pokeapi";
import getIdFromURL from "../utils/getPokemonId";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

type PokemonItemProps = {
    //pokemon: Pokemon;
    name: string;
    id: string;
    setSelectedPokemon: Function;
};

export default function PokemonItem({
    name,
    id,
    setSelectedPokemon,
}: PokemonItemProps) {
    return (
        <Container
            className="mt-2 bg-white shadow rounded"
            onClick={() => setSelectedPokemon(name)}
        >
            {"#" + id}
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
                className="pokemon-item-img"
                width="64px"
                height="64px"
            />
            <span className="text-uppercase">{name}</span>
        </Container>
    );
}
