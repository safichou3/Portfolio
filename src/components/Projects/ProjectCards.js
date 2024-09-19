import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub, BsGoogle} from "react-icons/bs";
import {FiChrome} from "react-icons/fi";

// import {cardsbody} from "../../style.css";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <div className="cards-body">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{textAlign: "justify"}}>
                        {props.description}
                    </Card.Text>
                    {!props.isBlog && props.link && (
                        <Button variant="primary" href={props.link} target="_blank">
                            <BsGoogle/> &nbsp;
                            {props.isBlog ? "Blog" : "Site"}
                        </Button>
                    )}
                    {"\n"}
                    {"\n"}

                    {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{marginLeft: "10px"}}
                        >
                            <CgWebsite/> &nbsp;
                            {"Demo"}
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
