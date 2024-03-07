export interface PokemonPage {
    results: { name: string; url: string }[];
    next: string | null;
    previous: string | null;
}
