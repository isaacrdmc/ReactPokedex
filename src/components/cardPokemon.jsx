
import { Card, Form, Button, Image } from 'react-bootstrap'; // Si usas react-bootstrap



// ? Acá es donde se mostraran los datos del pokemon seleccionado
export default function CardPokemon({ pokemon }) {
    return (
        <div className="card">

            {/* // ^ Imágen: */}
            <Image src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="card-img-top" alt="..."></Image>
            

            {/* // ^ Brbe descripción: */}
            <div className="card-body">
                <h5 className="card-title">Nombre</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
            

            {/* // ^ Datos a visualizar: */}
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo 1</li>
                <li className="list-group-item">Tipo 2</li>
                {/* <li className="list-group-item">Region</li> */}
            </ul>
            

            {/* // ^ Ir al siguiente: */}
            <div className="card-body">
                <button href="#" className="card-link">Siguiente</button>
                <button href="#" className="card-link">Anteriror</button>
            </div>

        </div>
    );
}



/*

  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
*/