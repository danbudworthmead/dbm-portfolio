import React from "react";
import Tile from "./Tile";
export default function Landing() {
    return (
        <header
            id="home"
            className="page bg-secondary text-primary min-vh-100 d-flex justify-content-center"
        >
            <div className="text-center">
                <div className="pt-5 pb-5" />
                <h1 style={{ fontSize: "5vw" }}>Daniel Budworth-Mead</h1>
                <p style={{ fontSize: "3vw" }}>Video Games Programmer</p>
                <div className="container-fluid p-5">
                    <div className="row g-4 justify-content-center">
                        <Tile title={"Oxford Medical Simulation"} link={"oms"} image={"oms"} />
                        <Tile title={"Forza Horizon"} link={"forza"} image={"forza"} />
                        <Tile title={"Team Sonic Racing"} link={"tsr"} image={"tsr"} />
                        <Tile title={"Avakin Life"} link={"avakin"} image={"avakin"} />
                        <Tile title={"Skeld.net"} link={"skeldnet"} image={"skeld"} />
                        <Tile title={"Game Jams"} link={"jams"} image={"jams"} />
                        {/*<Tile title={"Woodworking?"} link={"woodworking"} image={"wood"}/>*/}
                    </div>
                </div>
            </div>
        </header>
    );
}
