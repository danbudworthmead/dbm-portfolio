import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import YouTube from "react-youtube";

export default function Skeldnet() {
    return (
        <Container className="pt-5 fs-3">
            <div className="pt-5">
                <h1 className="text-tertiary">Skeld.net</h1>
                <Container className="pb-5">
                    <Button
                        className="bg-tertiary mx-3"
                        href="https://skeld.net"
                        target="_blank"
                    >
                        Website
                    </Button>
                    <Button
                        className="bg-tertiary mx-3"
                        href=" https://play.google.com/store/apps/details?id=net.skeld.switcher"
                        target="_blank"
                    >
                        Android App
                    </Button>
                    <Button
                        className="bg-tertiary mx-3"
                        href=" https://www.patreon.com/skeld_net"
                        target="_blank"
                    >
                        Patreon
                    </Button>
                </Container>
                <h2>Overview</h2>
                <p>
                    This is my first lucrative solo project. skeld.net is a
                    custom server side unofficial add-on to the popular game
                    Among Us. skeld.net at the point of writing this has totaled
                    2.6 million downloads on the Google Play store and I plan to
                    release an iOS app in the coming months.
                </p>
                <p>
                    I developed skeld.net on my weekends in the final months of
                    2020, at it’s peak in early 2021 it was averaging around
                    3800 concurrent players and hundreds of thousands of daily
                    active users.
                </p>
                <p>
                    Across YouTube it has garnered over 50 million views and I
                    worked with big content creators such as SocksFor1, Jelly,
                    Vannoss, to name but a few.
                </p>
                <Card style={{ maxWidth: "40rem" }}>
                    <Card.Img variant="top" src="/skeldnetappstore.png" />
                    <Card.Subtitle>The skeld.net app store page</Card.Subtitle>
                </Card>
                <br />
                <Card style={{ maxWidth: "40rem" }}>
                    <Card.Img variant="top" src="/skeldnetmetrics.webp" />
                    <Card.Subtitle>
                        The skeld.net app total metrics as of 12/05/2021
                    </Card.Subtitle>
                </Card>
                <br />
                <h2>In-Depth</h2>
                <p>
                    skeld.net was originally just a custom mode called “Zombies
                    Are Among Us” created around Halloween 2020. It was a server
                    side plugin I created for{" "}
                    <a
                        href="https://github.com/Impostor/Impostor"
                        target="_blank"
                    >
                        https://github.com/Impostor/Impostor
                    </a>{" "}
                    for myself and my friends to play as we were starting to get
                    a bit bored of regular Among Us game play.
                </p>
                <p>
                    Shortly after we played it I posted a video demo clip of it.
                </p>
                <YouTube videoId="ucfMyGcMaX0" />
                <p>
                    I was soon contacted by a YouTuber with a few hundred
                    subscribers who played it and also uploaded a video on it.
                    The next person who reached out had 300,000 thousand subs,
                    then pretty quickly I was having meetings with the likes of
                    Ssundee and Socksfor1 who have millions of subscribers and
                    hit the top of YouTube gaming almost daily.
                </p>
                <p>
                    Originally this was going to be PC only but I soon figured
                    out that the Android version of Among Us worked the same way
                    as the PC version. I developed the skeld.net app and put it
                    onto the Google Play store. It quickly shot to #3 on the
                    trending apps section of Russia’s Google Play Store.
                </p>
                <p>
                    I monetized the app first of all with a banner advert, later
                    adding a video advert when the PLAY button was pressed,
                    before changing Among Us to the custom region and launching
                    the game. The video advert generated about 10x the revenue
                    of the banner advert, which helped pay for DigitalOcean
                    server costs and made a nice tidy profit.
                </p>
                <p>
                    I have regularly communicated with ForteBass the programmer
                    from Innersloth who created Among Us about new features and
                    inner workings of the Among Us code. Himself and the team at
                    Innersloth have been incredibly supportive of the modding
                    community. I continue to maintain and update skeld.net with
                    new releases of Among Us.
                </p>
                <p>
                    At the time of writing this, skeld.net is still the biggest
                    and most successful modded Among Us server. There are over
                    ten custom modes such as;
                </p>
                <h3>Slenderman</h3>
                <YouTube videoId="TrF_h8RxYN4" />
                <h3>Zombies</h3>
                <YouTube videoId="N6BxO04mLDw" />
                <h3>Crazy Colors</h3>
                <YouTube videoId="4slfj0DBBZI" />
                <h3>Twins</h3>
                <YouTube videoId="rl1QxHeb9zo" />
            </div>
            <br />
        </Container>
    );
}
