import { Container } from "react-bootstrap";

type PokemonItemProps = {
    name: string;
    id: string;
    handleSelectPokemon?: Function;
};

export default function PokemonItem({
    name,
    id,
    handleSelectPokemon,
}: PokemonItemProps) {
    return (
        <Container
            role="button"
            className="mt-2 bg-white shadow rounded d-flex align-items-center"
            onClick={() => handleSelectPokemon?.(name)}
        >
            <div className="id-container">{"#" + id}</div>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
                width="64px"
                height="64px"
            />
            <span className="text-uppercase">{name}</span>
        </Container>
    );
}
