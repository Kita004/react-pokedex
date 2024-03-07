export interface Pokemon {
    id: number;
    name: string;
    wight: number;
    height: number;
    sprites: {
        front_default: string;
        other: {
            "official-artwork": string;
        };
    };
    types: {
        type: {
            name: string;
        };
    }[];
}
