import React from 'react';
import img1 from '../images/CaruselImg/2.jpg';
import img2 from '../images/CaruselImg/1.jpg';
import img3 from '../images/CaruselImg/5.jpg';
import {Carousel} from "react-bootstrap";
import RibbonText from "./ RibbonText";
import AosText from "./AosText";

const ImgCarousel = () => {
    return (
        <div>
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
                {/*<RibbonText/>*/}
            </div>
            {/*<AosText/>*/}
        </div>
    );
};

export default ImgCarousel;
