import React from 'react';
import {Carousel} from "react-bootstrap";
import img1 from '../Image/CaruselImg2/main_slide_1.jpg'
import img2 from '../Image/CaruselImg2/main_slide_2.jpg'
import img3 from '../Image/CaruselImg2/main_slide_3.jpg'
import img4 from '../Image/CaruselImg2/main_slide_4.jpg'
import img5 from '../Image/CaruselImg2/main_slide_5.jpg'
import img6 from '../Image/CaruselImg2/main_slide_6.jpg'

const CaruselGroup = () => {
    return (
        <div style={{marginBottom: 50}}>
            <div data-aos="fade-up">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        style={{height: 450, objectFit: 'cover'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        style={{height: 450, objectFit: 'cover'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        style={{height: 450, objectFit: 'cover'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        style={{height: 450, objectFit: 'cover'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        style={{height: 450, objectFit: 'cover'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img6}
                        style={{height: 450, objectFit: 'cover'}}
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default CaruselGroup;
