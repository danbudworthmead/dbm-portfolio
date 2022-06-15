import "./App.css";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Landing from "./Landing";
import Skeldnet from "./Portfolio/Skeldnet";
import Tsr from "./Portfolio/Tsr";
import Forza from "./Portfolio/Forza";
import Avakin from "./Portfolio/Avakin";
import About from "./About";
import Contact from "./Contact";

function App() {
    return (
        <div
            className="g-0 min-vh-100 bg-secondary text-primary"
            style={{ fontFamily: "Tommy" }}
        >
            <Container fluid>
                <Router></Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skeldnet" element={<Skeldnet />} />
                    <Route path="/tsr" element={<Tsr />} />
                    <Route path="/forza" element={<Forza />} />
                    <Route path="/avakin" element={<Avakin />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
