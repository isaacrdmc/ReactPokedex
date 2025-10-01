



// export default async function ListaPokemon(setListaPokemon) {
//     const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

//     // * Realizamos la peticion a la API:
//     let responsePokemnos = await fetch(url);

//     // * Esperamos a que la respuesta sea correcta:
//     let datosPokemnos = await responsePokemnos.json();

//     // ? Extraemos los datos de la respuesta que sean correctos:
//     let pokedex = datosPokemnos.results[0];


//     // ^ Desestructuramos los objetos de arreglo:
//     const {
//         name, url_Pokemon
//     } = pokedex;
    


//     // ^ Devolvemos los datos para mostrar en la tabla:
//     return {
//         nombrPokemno: name,
//         urlPokemon: url_Pokemon
//     };   

// }