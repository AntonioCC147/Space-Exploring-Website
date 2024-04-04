import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CrewData from './CrewData.json';

import ActiveButton from '../../assets/images/crew/ActiveButton.png';
import InactiveButton from '../../assets/images/crew/InactiveButton.png';

import './Crew.css';

export default function Crew() {
    const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");

    return (
        <Container fluid className="crewBackground bellefair">
            {CrewData.filter(crew => crew.name === selectedCrew).map((crew, index) => (
                <Row>
                    <Col sm={12} md={6}>
                        <p className="crewText1"><span style={{ color: "gray", marginRight: "20px" }}>02</span>MEET YOUR CREW</p>
                        <p className="crewFunction">{crew.function}</p>
                        <p className="crewName">{crew.name}</p>
                        <p className="crewDescription">{crew.description}</p>
                        <div className="crewButtonBox">
                            <button onClick={() => setSelectedCrew("Douglas Hurley")} className="crewButton">
                                <img src={selectedCrew === "Douglas Hurley" ? ActiveButton : InactiveButton} className="crewImageButton" alt="Button"/>
                            </button>
                            <button onClick={() => setSelectedCrew("Mark Shuttleworth")} className="crewButton">
                                <img src={selectedCrew === "Mark Shuttleworth" ? ActiveButton : InactiveButton} className="crewImageButton" alt="Button"/>
                            </button>
                            <button onClick={() => setSelectedCrew("Victor Glover")} className="crewButton">
                                <img src={selectedCrew === "Victor Glover" ? ActiveButton : InactiveButton} className="crewImageButton" alt="Button"/>
                            </button>
                            <button onClick={() => setSelectedCrew("Anoushen Ansari")} className="crewButton">
                                <img src={selectedCrew === "Anoushen Ansari" ? ActiveButton : InactiveButton} className="crewImageButton" alt="Button"/>
                            </button>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <div className="crewBox">
                            <img src={require(`../../assets/images/crew/${selectedCrew}.png`)} className="crewImage" alt="Crew"/>
                        </div>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}