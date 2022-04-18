import React from 'react';
import img1 from '../image/2.jpg';
import img2 from '../image/1.jpg';
import img3 from '../image/3.jpg';
import {Carousel} from "react-bootstrap";
import RibbonText from "./ RibbonText";

const ImgCarousel = () => {
    return (
        <div className={'mt-2'}>
            <Carousel>
                <Carousel.Item>
                    <div style={{
                        width: '100vw',
                        height: '90vh',
                        backgroundImage: `url(${img1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}/>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{
                        width: '100vw',
                        height: '90vh',
                        backgroundImage: `url(${img2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}/>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{
                        width: '100vw',
                        height: '90vh',
                        backgroundImage: `url(${img3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}/>
                </Carousel.Item>
            </Carousel>
            <RibbonText/>
        </div>
    );
};

export default ImgCarousel;
