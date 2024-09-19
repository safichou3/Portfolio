import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Bonjour tout le monde je suis <span className="purple">Safia Medjahed </span>
                        de <span className="purple"> Rouen, France.</span>
                        <br/>
                        Je viens d'obtenir mon <span
                        className="purple"> Bac +3 concepteur développeur d'application </span> <br/> chez <span className="purple">Need For School</span>.
                        <br/>
                        Je suis actuellement à la recherche d'une alternance de 2 ans <br/> pour mon <span className="purple">Mastère "Expert en développement web"</span> chez <span className="purple">Ynov</span>.
                        <br/>
                        <br/>
                        {/*Apart from coding, some other activities that I love to do!*/}
                        A part coder, voici quelques activités que j'aime !
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Le Basketball
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Les jeux de sociétés
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Les jeux vidéo
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
