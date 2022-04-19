import React from 'react';
import img1 from '../Image/CaruselImg/2.jpg';
import img2 from '../Image/CaruselImg/1.jpg';
import img3 from '../Image/CaruselImg/3.jpg';
import {Carousel} from "react-bootstrap";
import RibbonText from "./ RibbonText";

const ImgCarousel = () => {
    return (
        <div style={{marginBottom: 50}}>
            <div data-aos="fade-up">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            style={{height: 550, objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            style={{height: 550, objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            style={{height: 550, objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <RibbonText/>
        </div>
    );
};

export default ImgCarousel;
