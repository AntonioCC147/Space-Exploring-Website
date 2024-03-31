import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlanetsData from './PlanetsData.json';

import PlanetLine from '../../assets/icons/PlanetLine.png';

import './Planets.css';

export default function Planets() {
    const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

    return (
        <Container fluid className="planetsBackground bellefair">
            {PlanetsData.filter(planet => planet.name === selectedPlanet).map((planet, index) => (
                <Row>
                    <Col sm={12} md={6}>
                        <p className="planetsText1"><span style={{ color: "gray", marginRight: "20px" }}>01</span>PICK YOUR DESTINATION</p>
                        <div className="planetImgBox">
                            <img src={require(`../../assets/images/planets/${selectedPlanet}.png`)} className="planetImage rotating" alt="Planet"/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <div className="planetsBox">
                            <button onClick={() => setSelectedPlanet("Mercury")} className={selectedPlanet === "Mercury" ? "isPlanetActive" : "isPlanetInactive"}>MERCURY</button>
                            <button onClick={() => setSelectedPlanet("Venus")} className={selectedPlanet === "Venus" ? "isPlanetActive" : "isPlanetInactive"}>VENUS</button>
                            <button onClick={() => setSelectedPlanet("Earth")} className={selectedPlanet === "Earth" ? "isPlanetActive" : "isPlanetInactive"}>EARTH</button>
                            <button onClick={() => setSelectedPlanet("Mars")} className={selectedPlanet === "Mars" ? "isPlanetActive" : "isPlanetInactive"}>MARS</button>
                            <button onClick={() => setSelectedPlanet("Jupiter")} className={selectedPlanet === "Jupiter" ? "isPlanetActive" : "isPlanetInactive"}>JUPITER</button>
                            <button onClick={() => setSelectedPlanet("Saturn")} className={selectedPlanet === "Saturn" ? "isPlanetActive" : "isPlanetInactive"}>SATURN</button>
                            <button onClick={() => setSelectedPlanet("Uranus")} className={selectedPlanet === "Uranus" ? "isPlanetActive" : "isPlanetInactive"}>URANUS</button>
                            <button onClick={() => setSelectedPlanet("Neptun")} className={selectedPlanet === "Neptun" ? "isPlanetActive" : "isPlanetInactive"}>NEPTUN</button>
                            <button onClick={() => setSelectedPlanet("Pluto")} className={selectedPlanet === "Pluto" ? "isPlanetActive" : "isPlanetInactive"}>PLUTO</button>
                        </div>
                        <div key={index}>
                            <p className="planetsName">{planet.name}</p>
                            <p className="planetDescription">{planet.description}</p>
                            <img src={PlanetLine} alt="PlanetLine" style={{width: "100%"}}/>
                            <Row>
                                <Col sm={12} md={6}>
                                    <p className="planetDistance">AVERAGE DISTANCE</p>
                                    <p className="planetSattelites">{planet.distance}</p>
                                </Col>
                                <Col sm={12} md={6}>
                                    <p className="planetDistance">SATELLITES NUMBER</p>
                                    <p className="planetSattelites">{planet.satellites}</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}