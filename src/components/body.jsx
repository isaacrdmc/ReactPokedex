
import { Container, Row, Col } from 'react-bootstrap';
import CardPokemon from './cardPokemon';
import GridPokedex from './gridPokedex';
// import { useState } from 'react';



export default function Body() {
    // ? Creamos el estado para seleccionar el componente:
    // const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null); 
        


    return(
        <Container className="my-4">
            <Row>
                <Col md={4} className="mb-"> 
                {/* // ? Le pasmos el valor del estado */}
                    <CardPokemon />
                    {/* <CardInfo user={usuarioSeleccionado}/> */}
                </Col>
                
                <Col md={7}> 
                    {/* // ? Le pasmos el JSON junto con el modificador del estado */}
                    <GridPokedex />
                    {/* <TableData usuarios={usuarios} setUsuarioSeleccionado={setUsuarioSeleccionado}/> */}
                </Col>
            </Row>
        </Container>
    );
}