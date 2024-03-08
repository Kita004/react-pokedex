export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    abilities: {
        ability: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}

export interface SimplifiedPokemon {
    id: number;
    name: string;
}
