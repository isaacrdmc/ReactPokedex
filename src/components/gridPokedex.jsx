/* eslint-disable react/prop-types */
import { useState } from "react";



export default function GridPokedex({ onSelectPokemon, pokedexList }) {


    // ? Creamos los estados para la paginación de la tabla:
    const [paginaActual, setPaginaActual] = useState(1);
    const itemPorPagina = 10;

    // ? Ahora calculamos los ínidces:
    const indiceDeUltimoItem = paginaActual * itemPorPagina;
    const indiceDePrimerItem = indiceDeUltimoItem - itemPorPagina;

    const elementosActuales = pokedexList.slice(indiceDePrimerItem, indiceDeUltimoItem);

    const totalPaginas = Math.ceil(pokedexList.length / itemPorPagina);



    // * Creamos la función para llamar al pokemno que llama a la segunda API:
    const handleSelect = async (url) => {
        try {

            // ^ Realizamos la segunda llamada API:
            const responsePokemon = await fetch(url);
            const detallesPokemon = await responsePokemon.json();


            // ? Actualizamos el estado para mostrar el pokemon seleccionado:
            onSelectPokemon(detallesPokemon);

            // console.table(detallesPokemon);

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
                    {elementosActuales.map((pokemon, index) => (
                        <tr key={pokemon.name}>
                            <td>#{indiceDePrimerItem + index + 1}</td>
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

            {/* // ^ Sección de la paginación: */}
            {totalPaginas > 1 && (
                <nav aria-label="Page navigation example" className="mt-2">
                    <ul className="pagination justify-content-center">
                        {/* Botón Previous */}
                        <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setPaginaActual(paginaActual - 1)}
                                disabled={paginaActual === 1}
                            >
                                Previous
                            </button>
                        </li>

                        {/* Mostrar solo 5 páginas como máximo */}
                        {[...Array(totalPaginas)].map((_, i) => i + 1)
                            .filter(
                                num =>
                                    num >= Math.max(1, paginaActual - 2) && // 2 antes
                                    num <= Math.min(totalPaginas, paginaActual + 2) // 2 después
                            )
                            .map(num => (
                                <li
                                    key={num}
                                    className={`page-item ${paginaActual === num ? "active" : ""}`}
                                >
                                    <button className="page-link" onClick={() => setPaginaActual(num)}>
                                        {num}
                                    </button>
                                </li>
                            ))}

                        {/* Botón Next */}
                        <li
                            className={`page-item ${paginaActual === totalPaginas ? "disabled" : ""
                                }`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setPaginaActual(paginaActual + 1)}
                                disabled={paginaActual === totalPaginas}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}

        </div>
    );
}

