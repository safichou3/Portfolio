import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/v-sign-3d.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row style={{alignItems: "center"}}>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em", textAlign: "left"}}>
                            Laissez-moi me <span className="purple"> présenter </span>
                        </h1>

                        <p className="home-about-body">
                            J'ai découvert le code il y a quelques années, et j'ai au moins appris quelque <br/> chose,
                            je pense… 🤷‍♀️
                            <br/>
                            {/*Changer le texte */}
                            <br/>
                            Je maîtrise les bases comme le
                            <i>
                                <b className="purple"> HTML, CSS, JS and PHP. </b>
                            </i>
                            <br/>
                            <br/>
                            Je sais aussi utiliser des CMS comme <i><b className="purple">WordPress</b> et <b
                            className="purple">Sulu</b></i> pour
                            développer <br/> des solutions personnalisées.
                            <br/>
                            <br/>
                            Mon domaine est la création de nouveaux &nbsp;
                            <i>
                                <b className="purple">sites web et d'applications </b>
                            </i>
                            <br/>
                            <br/>
                            Je suis actuellement en train d'apprendre <i><b className="purple">React.js</b></i> un
                            framework JavaScript
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social" style={{paddingTop: 50}}>
                        <h2>Suivez-moi !</h2>
                       {/* <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>*/}
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/safichou3"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/safia-medjahed/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
