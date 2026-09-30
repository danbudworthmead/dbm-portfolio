import React from "react";
import { Container } from "react-bootstrap";
import JamsCarousel from "./carousel";

export default function Jams() {
    return (
        <Container className="pt-5 fs-3">
            <div className="py-5">
                <h1 className="text-tertiary">Game Jams</h1>
                <p>
                    In my spare time I like to take part in game jams. 
                    These are short competitions where you have a limited time to create a game based on a theme.
                </p>
                <p>
                    Games can be played on my itch.io page.
                    <br />
                    <a href="https://badmannergames.itch.io/" target="_blank" rel="noreferrer">https://badmannergames.itch.io/</a>
                </p>
                <JamsCarousel />
            </div>
        </Container>
    );
}
