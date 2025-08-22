import React from "react";
import { Carousel, CarouselItem, Container } from "react-bootstrap";
import aImg from "./1705941459135 (1).jpeg"
import bImg from "./border.jpg"
import cImg from "./Untitled_design__13_.avif"

function Home(){
    return(
        <>
        <Carousel>
         <Carousel.Item>
            <img className="d-block w-100" src={aImg} alt="First slide"/>
         </Carousel.Item>
         <Carousel.Item>
            <img className="d-block w-100" src={bImg} alt="Second slide"/>
         </Carousel.Item>
         <Carousel.Item>
            <img className="d-block w-100" src={cImg} alt="Third slide"/>
         </Carousel.Item>
            </Carousel>

            <Container className="mt-5 text-center">
                <h2 className="section-title">About Me</h2>
                <p className="fs-5 text-muted px-4">
                    I'm Shubham , a passionate and dedicated software developer with a strong foundation in computer science and a keen interest in building innovative solutions.
                </p>
            </Container>
        </>
    );
}


export default Home;