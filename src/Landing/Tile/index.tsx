import React from "react";
import {Card, Nav} from "react-bootstrap";
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import {Link} from "react-router-dom";

interface TileProps {
    title: string;
    link: string;
    image: string;
}

export default function Tile({ title, link, image }: TileProps) {
    const [hovered, setHovered] = useState(false);

    const overlayStyle = useSpring({
        opacity: hovered ? 1 : 0,
    });

    return (
        <div className="m-3 position-relative p-0 bg-white"
              style={{ maxWidth: "30rem" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
            <Nav.Link 
                as={Link} 
                to={link}>
                <Card.Img variant="top" src={`/images/tiles/${image}.webp`}/>
                <animated.div 
                    style={{
                        ...overlayStyle,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <h3 style={{ color: 'white' }}>{title}</h3>
                </animated.div>
            </Nav.Link>
        </div>
    );
}