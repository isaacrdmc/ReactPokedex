
import { Card, Form, Button } from 'react-bootstrap'; // Si usas react-bootstrap



export default function CardInfo() {
    return (

        // ? Renderizamos lo siguiente:
        <Card className='p-3'>

            {/* // * Sección para la Foto */}
            <div className='d-flex justify-content-center align-items-center mb-3 card-Estilo-sutil'>
                Foto
            </div>

            {/* // * Sección del formulario de los Inputis */}
            <Form>
                
                <Form.Group className="mb-2">
                    <Form.Label>
                        <small>Nombre</small>
                    </Form.Label>
                    <Form.Control type="text" size="sm" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>
                        <small>Apellido</small>
                    </Form.Label>
                    <Form.Control type="text" size="sm" />
                </Form.Group>
                
                <Form.Group className="mb-2">
                    <Form.Label>
                        <small>Apellido 2</small>
                    </Form.Label>
                    <Form.Control type="text" size="sm" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>
                        <small>Edad</small>
                    </Form.Label>
                    <Form.Control type="number" size="sm" />
                </Form.Group>
            </Form>


            {/* // * Sección para los botones de las opciones: */}
            <div className="d-flex justify-content-between mt-3">
                <Button className='btn btn-danger'>
                    Eliminar
                </Button>
                <Button className='btn btn-success'>
                    Agregar
                </Button>
            </div>
        </Card>
    )
}