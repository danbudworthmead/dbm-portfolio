import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Contact() {
    return (
        <Container className="pt-5 fs-3">
            <div className="pt-5">
                <h1>Contact</h1>
                <p>Phone number: 07766918401</p>
                <p>Email: contact@danbudworthmead.com</p>
                <Button
                    className="text-tertiary m-2"
                    href="https://www.linkedin.com/in/daniel-budworth-mead-1a2716112"
                    target="_blank"
                >
                    LinkedIn
                </Button>
                <Button
                    className="text-tertiary m-2"
                    href="https://github.com/danbudworthmead"
                    target="_blank"
                >
                    GitHub
                </Button>
                <Button
                    className="text-tertiary m-2"
                    href="DanBudworthMeadCV.pdf"
                    target="_blank"
                >
                    Download a PDF of my CV
                </Button>
            </div>
            <br />
        </Container>
    );
}
