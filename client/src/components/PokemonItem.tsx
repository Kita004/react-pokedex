import { useState } from "react";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "../models/Pokemon";
import { getPokemon } from "../services/pokeapi";

type PokemonItemProps = {
    pokemon: Pokemon;
};

export default function PokemonItem({ pokemon }: PokemonItemProps) {
    return <div>{pokemon?.height}</div>;
}
