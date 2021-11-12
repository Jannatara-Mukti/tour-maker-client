import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/bannerr/banner-1.jpg';
import img2 from '../../../images/bannerr/banner-2.jpg';
import img3 from '../../../images/bannerr/banner-3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>Where Would You Like To Go</h5>
                    <p>Travel is discovering cultures, expanding horizons, staying in crappy hostels and backpacking</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Travel To Experience A Different Way Of Living</h5>
                    <p>The hurdles you jump while traveling can have a serious impact on how you perceive and understand the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Discover Yourself Through Travelling</h5>
                    <p>Traveling opens your eyes, you learn who you are, it will help you discover new skills, and gives you perspective.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
                    );
                };

export default Banner;