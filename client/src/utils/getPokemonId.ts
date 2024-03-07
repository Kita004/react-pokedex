export default function getIdFromURL(url: string) {
    return url
        .replace("https://pokeapi.co/api/v2/pokemon/", "")
        .replace("/", "");
}
