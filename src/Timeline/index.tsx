import React from "react";
import { Button } from "react-bootstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2015-2017"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">
                    Started BSc Computer Games Programming
                </h3>
                <h4>University Of Gloucestershire</h4>
                <h5>Student</h5>
                <p>
                    Always having a passion for problem solving and video games,
                    this course was perfect for me to take on. Working mostly in
                    C++ I studied graphics, physics, AI, and a bit of
                    networking.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2017-2018"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">
                    Team Sonic Racing
                </h3>
                <h4>Sumo Digital</h4>
                <h5>Placement Programmer</h5>
                <p>
                    I applied for a placement year at Sumo Digital. I was very
                    nervous during that interview in Sheffield, but low and
                    behold they liked my University work and hired me to work on
                    TSR alongside senior developers with decades of experience.
                </p>
                <Button href="/tsr">Read more</Button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2018-2019"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">
                    Graduated with 1:1 in Bsc Computer Games Programming
                </h3>
                <h4>University Of Gloucestershire</h4>
                <h5>Final Year Student</h5>
                <p>
                    Final year was not much of a challenge after working on Team
                    Sonic Racing for over a year. Being in a professional
                    environment at Sumo Digital gave me the skills and work
                    ethic I needed to complete my course.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019-2020"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">
                    Forza Horizon
                </h3>
                <h4>Sumo Digital</h4>
                <h5>Junior Gameplay Programmer</h5>
                <p>
                    As soon as I graduated from University, Sumo Digital offered
                    me a full time position back in the same office I did my
                    placement year at. I was more than happy to get back and
                    working on awesome games.
                </p>
                <Button href="/forza">Read more</Button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2020-2021"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">Avakin Life</h3>
                <h4>Lockwood Publishing Ltd</h4>
                <h5>Coretech Engineer</h5>
                <p>
                    LKWD approached me with an offer I could not refuse. So I
                    said my goodbyes to the folks at Sumo and ventured on.
                </p>
                <Button href="/avakin">Read more</Button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2021-2022"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">Skeld.net</h3>
                <h4>Self-Published</h4>
                <p>
                    During the covid lockdown I moved back to my parents, to
                    help them out in Bristol, and worked from home for Lockwood.
                    As I could not leave the house I found myself with a lot of
                    free time on my hands. I created a modded app for the game
                    Among Us. The creators (Innersloth) like what I have done
                    and allow me to continue to profit from my mod. It currently
                    has 3.74m downloads.
                </p>
                <Button href="/skeldnet">Read more</Button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2021-2022"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">Avakin Life</h3>
                <h4>Lockwood Publishing Ltd</h4>
                <h5>QA Automation Engineer</h5>
                <p>
                    During Q1 of 2022 I took on responsibilities including
                    getting the old automated testing systems working again.
                    After a month of getting to grips with it, Lockwood offered
                    me the role of QA Automation Engineer to take on more yet
                    responsibilities and join the quality assurance team.
                </p>
                <Button href="/avakin">Read more</Button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2022-Present"
                iconStyle={{ background: "#fb8500" }}
            >
                <h3 className="vertical-timeline-element-title">Medical Simulation</h3>
                <h4>Oxford Medical Simulation</h4>
                <h5>Software Development Engineer in Test</h5>
                <p>
                    WIP
                </p>
                {
                // <Button href="/">Read more</Button>
                }
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}
