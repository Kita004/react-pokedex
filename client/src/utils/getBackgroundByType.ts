import { Pokemon } from "../models/Pokemon";

export default function getBackgroundByType(
    pokemon: Pokemon,
    defaultColor: string
): string {
    if (pokemon && pokemon.types[0].type.name) {
        return "bg-type-" + pokemon.types[0].type.name;
    } else {
        return defaultColor;
    }
}
