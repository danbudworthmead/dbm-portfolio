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

export default function Tsr() {
    const [open, setOpen] = useState(false);

    return (
        <Container className="pt-5 fs-3">
            <div className="py-5">
                <h1 className="text-tertiary">Team Sonic Racing</h1>
                <p>
                    This was the first title I worked on in the games industry.
                    I started out being chucked into the deep end of a 15+ year
                    old code base full of cyber cobwebs and digital dust. At
                    first I was primarily fixing small bugs but within a couple
                    weeks on the project I was tasked with prototyping some of
                    the new weapons for this installment of the franchise. This
                    involved me working alongside QA, design, audio, art,
                    animation, as well as other coders to develop the Jade Ghost
                    and Yellow Drill weapons.
                </p>
                <p>
                    My main contribution to TSR was the ‘Team Adventure’ mode,
                    the campaign mode for the game. I was tasked with the
                    technical design work for the system to hold and use all of
                    the data needed for the campaign. What story beat to play,
                    which level to load into, what characters to put onto the
                    racetrack etc.
                </p>
                <p>
                    When developing this system I wanted it to be really easy
                    for the designers to be able to input all the campaign data
                    without my assistance. I ended up using an open source piece
                    of software called “Free Mind”. It allowed me to create a
                    mind map of the games campaign, linking story beats to
                    chapters, it also handily exported as an XML file! Which was
                    automatically converted to the in-house SumoXML file during
                    the overnight build process and then parsed into the games
                    data at runtime.
                </p>
                <Card style={{ width: "50rem" }} className="mx-auto">
                    <Card.Img variant="top" src="/images/tsr.webp" />
                    <Card.Subtitle>
                        The team adventure mode selection screen
                    </Card.Subtitle>
                </Card>
            </div>
        </Container>
    );
}
