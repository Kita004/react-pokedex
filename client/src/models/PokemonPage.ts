export interface PokemonPage {
    results: PokemonPageResult[];
    next: string | null;
    previous: string | null;
}

export interface PokemonPageResult {
    name: string;
    url: string;
}
