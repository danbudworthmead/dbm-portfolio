import "./App.css";

import React from "react";
import { Container } from "react-bootstrap";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Landing from "./Landing";
import Skeldnet from "./Portfolio/Skeldnet";
import Tsr from "./Portfolio/Tsr";
import Forza from "./Portfolio/Forza";
import Avakin from "./Portfolio/Avakin";
import About from "./About";
import Contact from "./Contact";
import DeepSpace from "./Games/DeepSpace";
import DeepSpacePrivacy from "./Games/DeepSpacePrivacy";

function App() {
    return (
        <div
            className="g-0 min-vh-100 bg-secondary text-primary"
            style={{ fontFamily: "Tommy" }}
        >
            <Container fluid>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skeldnet" element={<Skeldnet />} />
                    <Route path="/tsr" element={<Tsr />} />
                    <Route path="/forza" element={<Forza />} />
                    <Route path="/avakin" element={<Avakin />} />
                    <Route path="/game" element={<DeepSpace />} />
                    <Route path="/ddsprivacy" element={<DeepSpacePrivacy />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
