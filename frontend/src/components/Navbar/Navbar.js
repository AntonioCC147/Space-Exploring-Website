import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import NavbarStar from '../../assets/icons/NavbarStar.png';
import NavbarLine from '../../assets/icons/NavbarLine.png';

import './Navbar.css';

export default function NavbarComponent() {
    return (
        <Navbar key="lg" expand="lg" fixed="top" className="navbarComponent mb-3 bellefair">
            <a href="/"><img src={NavbarStar} alt="NavabrStar" className="navabrStar"/></a>
            <img src={NavbarLine} alt="NavbarLine" className="navbarLine"/>
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton/>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link href="/" className="navbarText"><b>00 </b>HOME</Nav.Link>
                            <Nav.Link href="/" className="navbarText"><b>01 </b>PLANETS</Nav.Link>
                            <Nav.Link href="/" className="navbarText"><b>02 </b>CREW</Nav.Link>
                            <Nav.Link href="/" className="navbarText"><b>03 </b>TECHNOLOGY</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}