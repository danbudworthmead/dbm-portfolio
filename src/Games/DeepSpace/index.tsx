import React from "react";
import { Container } from "react-bootstrap";

export default function DeepSpace() {
  return (
    <Container>
        <br></br><br></br><br></br>
        <h2>Destination: Deep Space</h2>
        <p>Fullscreen it!</p>
        <div style={{ width: "100%", height: "600px", overflow: "hidden" }}>
          <iframe
            title="DeepSpaceGame"
            src="/deepspace/index.html"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
    </Container>
  );
}
