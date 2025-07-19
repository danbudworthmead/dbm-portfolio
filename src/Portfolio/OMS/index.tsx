import React from "react";
import { Card, Container } from "react-bootstrap";

export default function OMS() {
    return (
        <Container className="pt-5 fs-3">
            <div className="py-5">
                <h1 className="text-tertiary">Oxford Medical Simulation</h1>
                <p>
                    Oxford Medical Simulation (OMS) is a company that creates virtual reality training simulations for healthcare professionals.
                </p>
                <p>
                    I joined OMS as the sole SDET in September 2022. During my time here I have been responsible for 
                    building the test automation framework from the ground up, as well as maintaining and improving it.
                    I have also in-housed our entire build pipeline, which was previously outsourced to a third party.
                </p>
                <br />
                <Card style={{ maxWidth: "50rem" }} className="mx-auto">
                    <Card.Img variant="top" src="/images/oms.webp" />
                </Card>
            </div>
        </Container>
    );
}
