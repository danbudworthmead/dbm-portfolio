import React, { useState } from "react";
import {
    Button,
    Card,
    Carousel,
    Collapse,
    Container,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import YouTube from "react-youtube";

export default function Forza() {
    const [open, setOpen] = useState(false);

    return (
        <Container className="pt-5 fs-3">
            <div className="py-5">
                <h1 className="text-tertiary">Forza Horizon</h1>
                <p>
                    Forza Horizon was my second industry project that I worked
                    on. The Sumo team were tasked with creating a DLC to
                    specifications set by Playground Games. In my day to day I
                    worked on mostly the user interface and menu systems for the
                    DLC. This involved once again working on an antiquated and
                    outdated in-house game engine.
                </p>
                <p>
                    This project was interesting in that it involved
                    collaborating with another studio, which brought its own
                    challenges as well. However, through long nights and lots of
                    pizza we created a very fun player experience.
                </p>
                <Card style={{ width: "50rem" }} className="mx-auto">
                    <Card.Img variant="top" src="/images/forza.webp" />
                </Card>
            </div>
        </Container>
    );
}
