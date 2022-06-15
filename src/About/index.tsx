import { Container } from "react-bootstrap";
import Timeline from "../Timeline";

export default function About() {
    return (
        <Container className="pt-5 fs-3">
            <div className="pt-5">
                <h1>About</h1>
                <p>
                    Bristol born video games programmer currently residing in
                    Nottingham.
                    <br />
                    Passionate about problem solving and creating fun user
                    experiences.
                </p>
            </div>
            <br />
            <Timeline />
        </Container>
    );
}
