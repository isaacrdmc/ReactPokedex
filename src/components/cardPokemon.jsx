/* eslint-disable react/prop-types */



import { Card, Image } from 'react-bootstrap'; // Si usas react-bootstrap



// ? Acá es donde se mostraran los datos del pokemon seleccionado
export default function CardPokemon({ pokemon }) {




    // ^ Validamos que hallan pokemons:
    if (!pokemon) {
        return (
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Selecciona un Pokémon</Card.Title>
                    <Card.Text>Haz clic en la tabla para ver los detalles.</Card.Text>
                </Card.Body>
            </Card>
        );
    }


    return (
        <div className="card">

            {/* // ^ Imágen: */}
            <Image
                // src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                src={pokemon.sprites?.front_default}
                className="card-img-top"
                alt={pokemon.name}
            />


            {/* // ^ Brbe descripción: */}
            <Card.Body>
                <Card.Title>#{pokemon.id} - {pokemon.name.toUpperCase()}</Card.Title>
                <Card.Text>
                Altura: {pokemon.height / 10} m <br />
                Peso: {pokemon.weight / 10} kg
                </Card.Text>
            </Card.Body>


            {/* // ^ Datos a visualizar: */}
            <ul className="list-group list-group-flush">
            {pokemon.types.map((tipo) => (
                <li key={tipo.type.name} className="list-group-item">
                {tipo.type.name}
                </li>
            ))}
            </ul>


            {/* // ^ Ir al siguiente: */}
            {/* <div className="card-body">
                <button href="#" className="card-link">Siguiente</button>
                <button href="#" className="card-link">Anteriror</button>
            </div> */}

        </div>
    );
}