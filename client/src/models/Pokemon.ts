export interface SimplifiedPokemon {
    id: number;
    name: string;
}

export interface Pokemon extends SimplifiedPokemon {
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
