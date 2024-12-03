import React, {useState, useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdfGen from "../../Assets/cv/CV_Safia_Medjahed-General.pdf";
import pdfDev from "../../Assets/cv/CV_Safia_Medjahed_Dev.pdf";
import {AiOutlineDownload} from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [selectedPdf, setSelectedPdf] = useState(pdfDev); // CV développeur par défaut

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle/>

                <Row style={{justifyContent: "center", position: "relative"}}>
                    {/* Bouton pour afficher le premier CV */}
                    <Button
                        // variant="primary"
                        onClick={() => setSelectedPdf(pdfDev)}
                        style={{
                            maxWidth: "250px",
                            margin: "10px",
                            backgroundColor: selectedPdf === pdfDev ? "#623686" : "#6c757d",
                            borderColor: selectedPdf === pdfDev ? "#623686" : "#6c757d"
                        }}
                    >
                        Afficher CV Développeur
                    </Button>

                    {/* Bouton pour afficher le second CV */}
                    <Button
                        // variant="secondary"
                        onClick={() => setSelectedPdf(pdfGen)}
                        style={{
                            maxWidth: "250px",
                            margin: "10px",
                            backgroundColor: selectedPdf === pdfGen ? "#623686" : "#6c757d",
                            borderColor: selectedPdf === pdfGen ? "#623686" : "#6c757d"
                        }}
                    >
                        Afficher CV Alternatif
                    </Button>
                </Row>

                {/* Affichage du PDF sélectionné */}
                {selectedPdf && (
                    <Row style={{
                        justifyContent: "center",
                        position: "relative",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}>
                        <Document file={selectedPdf} className="d-flex justify-content-center">
                            <Page pageNumber={1} scale={width > 786 ? 1.7 : 1.0}/>
                        </Document>
                    </Row>
                )}

                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        href={pdfDev}
                        target="_blank"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: "300px",
                            margin: "20px",
                            borderColor: "#6d20c5d7",
                            backgroundColor: selectedPdf === pdfDev ? "#623686" : "#6c757d",
                        }}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Télécharger mon CV Developpeur
                    </Button>

                    <Button
                        href={pdfGen}
                        target="_blank"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: "300px",
                            margin: "20px",
                            borderColor: "#6d20c5d7",
                            backgroundColor: selectedPdf === pdfGen ? "#623686" : "#6c757d",
                    }}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Télécharger mon CV Alternatif
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;