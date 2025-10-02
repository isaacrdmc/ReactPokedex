
import { Container, Row, Col } from 'react-bootstrap';
import CardPokemon from './cardPokemon';
import GridPokedex from './gridPokedex';
import { useEffect, useState } from 'react';


// Función para obtener la lista inicial (separada para mantener la limpieza)
const ListaPokedex = async (setList) => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=600";
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Almacena el array 'results' en el estado
        setList(data.results); 
    } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
    }
};


export default function Body() {
    
    
    // * Creamos el estado para seleccionar el pokemon:
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null); 

    // * Creamos el estado para la lista de los pokemnos:
    const [ListaPokemon, setListaPokemon] = useState([]);


    // * Usamos el effecto para cargar la lista a la hora d emontar la web:
    useEffect(() => {
        // ? Le pasamos para agregar la lista de los datos 
        ListaPokedex(setListaPokemon);
    }, []);
        


    return(
        <Container className="my-4">
            <Row>
                <Col md={4} className="mb-"> 
                {/* // ? Le pasmos el valor del estado */}
                    <CardPokemon pokemon={pokemonSeleccionado} />
                </Col>
                
                <Col md={7}> 
                    {/* // ? Le pasmos el JSON junto con el modificador del estado */}
                    <GridPokedex 
                        pokedexList={ListaPokemon}      // * Le pasamos 
                        onSelectPokemon={setPokemonSeleccionado} 
                    />
                </Col>
            </Row>
        </Container>
    );
}