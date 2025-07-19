import React from "react";
import { Card, Container, Carousel } from "react-bootstrap";

export default function JamsCarousel() {
    const images = [
        { src: "/images/jams/tornado.webp", alt: "Tornado" },
        { src: "/images/jams/puppet.gif", alt: "Puppet" },
        { src: "/images/jams/inversion.webp", alt: "Inversion" },
        { src: "/images/jams/one.webp", alt: "One" }
    ];

    return (
        <Container className="pt-5 fs-3">
            <div className="py-5">
                <Carousel>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <Card className="mx-auto" style={{ maxWidth: "50rem" }}>
                                <Card.Img src={image.src} alt={image.alt} />
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Container>
    );
}