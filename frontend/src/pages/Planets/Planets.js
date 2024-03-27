import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Planets.css';

export default function Planets() {
    return (
        <Container fluid className="planetsBackground bellefair">
            <Row>
                <Col sm={12} md={6} className="text-center">
                    A
                </Col>
                <Col sm={12} md={6} className="text-center">
                    B
                </Col>
            </Row>
        </Container>
    )
}