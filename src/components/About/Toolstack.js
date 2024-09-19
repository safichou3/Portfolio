import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    // SiVisualstudiocode,
    SiJetbrains,
    SiPostman,
    SiSlack,
    SiVercel,
    SiWindows,
    SiTrello,
    SiNotion, SiWordpress, SiElementor,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows/>
            </Col>
            {/*<Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>*/}
            <Col xs={4} md={2} className="tech-icons">
                <SiJetbrains/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTrello/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNotion/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWordpress/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiElementor/>
            </Col>
        </Row>
    );
}

export default Toolstack;
