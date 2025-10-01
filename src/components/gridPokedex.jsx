
/* eslint-disable react/prop-types */ 



export default function GridPokedex({ onSelectPokemon, pokedexList }) {

    // * Creamos la función para llamar al pokemno que llama a la segunda API:
    const handleSelect = async (url) => {
        try {
            
            // ^ Realizamos la segunda llamada API:
            const responsePokemon = await fetch(url);
            const detallesPokemon = await responsePokemon.json();

            
            // ? Actualizamos el estado para mostrar el pokemon seleccionado:
            onSelectPokemon(detallesPokemon);

        } catch (error) {
            console.log("Error al obtener los detalles del pokemon: ", error);
        }
    }


    return (
        <div className="card p-2">
            <table className="table table-striped mb-0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pokemon</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {/* // ? Mapeamos el arreglo para poder crear las filas de la tabla: */}
                    {pokedexList.map((pokemon, index) => (
                        <tr key={pokemon.name}>
                            <td>#{index + 1}</td>
                            <td>{pokemon.name}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => handleSelect(pokemon.url)}
                                >
                                    Visualizar
                                </button>
                            </td>
                        </tr>
                    ))}

                    {/* // ^ Creamos un mensaje mientras cargan los datos: */}
                    {pokedexList.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center">Cargando pokedex</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

