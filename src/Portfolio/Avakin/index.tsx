import React from "react";
import { Card, Container } from "react-bootstrap";

export default function Avakin() {
    return (
        <Container className="pt-5 fs-3">
            <div className="py-5">
                <h1 className="text-tertiary">Avakin Life</h1>
                <p>
                    I joined Lockwood publishing as a CoreTech Engineer in April
                    2020. My day to day work involves working in a multitude of
                    different systems, fixing bugs and adding new features.
                </p>
                <p>
                    I have developed new features for the QA automation system,
                    added extra info to end user front end error messages, among
                    other useful systems for the rest of the development team to
                    use.
                </p>
                <p>
                    This project has been a great learning experience as it is
                    my first professional Unity project and first time I have
                    worked with asset downloading / streaming via a content
                    delivery network.
                </p>
                <p>
                    I have since taken on more responsibilities within the
                    company and earned a the new title of QA Automation
                    Engineer. I know maintain and improve the automated testing
                    systems. This is mostly for regression testing but also
                    includes soak testing and memory profiling.
                </p>
                <p>
                    The Avakin Life client is built in C#, the automation
                    systems are in python, and the automation dashboard I have
                    built is in ReactJS.
                </p>
                <Card style={{ maxWidth: "50rem" }} className="mx-auto">
                    <Card.Img variant="top" src="/images/avakin.webp" />
                </Card>
            </div>
        </Container>
    );
}
