import { Container } from "react-bootstrap";

type PokemonItemProps = {
    //pokemon: Pokemon;
    name: string;
    id: string;
    handleSelectPokemon: Function;
};

export default function PokemonItem({
    name,
    id,
    handleSelectPokemon,
}: PokemonItemProps) {
    return (
        <Container
            role="button"
            className="mt-2 bg-white shadow rounded"
            onClick={() => handleSelectPokemon(name)}
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
