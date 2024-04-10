import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TechnologyData from './TechnologyData.json';

import './Technology.css';

export default function Technology() {
    const [selectedTechnology, setSelectedTechnology] = useState("Launch Vehicle");

    return (
        <Container fluid className="technologyBackground bellefair">
            {TechnologyData.filter(technology => technology.name === selectedTechnology).map((technology, index) => (
                <Row>
                    <Col sm={12} md={6}>
                        <p className="technologyText1"><span style={{ color: "gray", marginRight: "20px" }}>03</span>SPACE LAUNCH 101</p>
                        <Row className="buttonsTechnology">
                        <img src={require(`../../assets/images/technology/${selectedTechnology} Mobile.jpg`)} className="technologyImageMobile" alt="Technology"/>
                            <Col sm={12} md={3} style={{marginTop: "-10px"}}>
                                <button onClick={() => setSelectedTechnology("Launch Vehicle")} className={selectedTechnology === "Launch Vehicle" ? "technologyButton1" : "technologyButton2"}>
                                    1
                                </button>
                                <button onClick={() => setSelectedTechnology("Spaceport")} className={selectedTechnology === "Spaceport" ? "technologyButton1" : "technologyButton2"}>
                                    2
                                </button>
                                <button onClick={() => setSelectedTechnology("Space Capsule")} className={selectedTechnology === "Space Capsule" ? "technologyButton1" : "technologyButton2"}>
                                    3
                                </button>
                            </Col>
                            <Col sm={12} md={9}>
                                <p className="technologyTitle">THE TERMINOLOGY...</p>
                                <p className="technologyName">{technology.name}</p>
                                <p className="technologyDescription">{technology.description}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src={require(`../../assets/images/technology/${selectedTechnology}.jpg`)} className="technologyImage" alt="Technology"/>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}