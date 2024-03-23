import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Explore from '../../assets/images/Explore.png';

import './Home.css';

export default function Home() {
    return (
        <Container fluid className="principalBackground bellefair">
            <Row>
                <Col sm={12} md={6}>
                    <p className="titleHome1">SO, YOU WANT TO TRAVE TO</p>
                    <p className="titleHome2">SPACE</p>
                    <p className="titleHome3">
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
                        the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                    </p>
                </Col>
                <Col sm={12} md={6} className="exploreContainer">
                    <img src={Explore} className="explore" alt="Explore"/>
                </Col>
            </Row>
        </Container>
    )
}