import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import envolis from "../../Assets/Projects/envolis-project.png";
import lbc from "../../Assets/Projects/lbc-project.png";
import plugin from "../../Assets/Projects/plugin-project.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    Mes <strong className="purple">Projets </strong>
                </h1>
                <p style={{color: "white"}}>
                    {/*Here are a few projects I've worked on recently.*/}
                    Voici quelques projets sur lesquels j'ai pu travailler
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={envolis}
                            isBlog={false}
                            title="Envolis"
                            description="Un site réalisé lors de mon alternance chez Internetrama. J'ai été chargée de faire toute l'intégration front du site sur WordPress avec Timber."
                            // description="Un site réalisé lors de mon alternance chez Internetrama. J'ai été chargé de faire toute l'intégration front du site sur WordPress avec Timber. J'ai aussi rédigé les spécifications fonctionnelles du site."
                            link="https://www.envolis.fr/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={lbc}
                            isBlog={false}
                            title="Le Bon Cheval"
                            description="Refonte du site LeBonCheval lors de mon stage chez NDA MEDIA, pour lequel j'ai effectué toute la préparation et l'intégration sur WordPress avec Elementor."
                            // link=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={plugin}
                            isBlog={false}
                            title="Plugin"
                            description="Un plugin que j'ai créé lors de mon stage chez NDA MEDIA, qui permet à l'utilisateur d'accéder à toutes les pages du site et dans toutes les langues disponibles."
                            link="https://www.smspartner.fr/"
                            // demoLink="https://chatify-49.web.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
