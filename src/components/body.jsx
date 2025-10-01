import CardInfo from "./cadrInfo";
import TableData from "./tableData";
import { Container, Row, Col } from 'react-bootstrap';



export default function Body() {
    return(
        <Container className="my-4">
            <Row>
                <Col md={4} className="mb-"> 
                    <CardInfo />
                </Col>
                
                <Col md={7}> 
                    <TableData />
                </Col>
            </Row>
        </Container>
    );
}