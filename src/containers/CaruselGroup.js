import React from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
import img1 from '../images/CaruselImg2/main_slide_1.jpg'
import img2 from '../images/CaruselImg2/main_slide_2.jpg'
import img3 from '../images/CaruselImg2/main_slide_3.jpg'
import img4 from '../images/CaruselImg2/main_slide_4.jpg'
import img5 from '../images/CaruselImg2/main_slide_5.jpg'
import img6 from '../images/CaruselImg2/main_slide_6.jpg'
import HomeText from "./HomeText";

const CaruselGroup = () => {
    let absolute;
    return (
        <div>
            <div style={{marginBottom: 50}}>
                <div data-aos="fade-up">
                    <Carousel fade>
                        <Carousel.Item style={{position: "relative"}}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                style={{height: 450, objectFit: 'cover'}}
                            />
                            <div style={{
                                position: 'absolute', bottom: '35%',
                                left: '10%',
                                fontWeight: '800', color: '#fff'
                            }}>
                                <h2 className={'OurMission'}>Уважаемые родители!</h2>
                                <p style={{width: 400}}>Школа «Малышок» проводит набор учащихся на
                                    следующий учебный год
                                </p>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item style={{position: "relative"}}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                style={{height: 450, objectFit: 'cover'}}
                            />
                            <div style={{
                                position: 'absolute', bottom: '35%',
                                left: '10%',
                                fontWeight: '800', color: '#fff'
                            }}>
                                <h2 className={'OurMission w-75'}>Летний IT лагерь «Робототехника и Английский»
                                </h2>
                                <p style={{width: 300}}>Робототехника и английский язык.
                                    Даты проведения: июнь-июль.
                                </p>
                            </div>
                        </Carousel.Item>
                            <Carousel.Item style={{position: "relative"}}>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    style={{height: 450, objectFit: 'cover'}}
                                />
                                <div style={{
                                    position: 'absolute', bottom: '30%',
                                    left: '10%',
                                    fontWeight: '800', color: '#fff'
                                }}>
                                    <h2 className={'OurMission w-75'}>Поздравляем выпускников с блестящими
                                        результатами орт и поступлением в ВУЗы!
                                    </h2>
                                    <p style={{width: 300}}>Средний бал ОРТ которые набирают наши ученики
                                        от 150 до 213 (Результаты выпускников 2017-2018 года).
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item style={{position: "relative"}}>
                                <img
                                    className="d-block w-100"
                                    src={img4}
                                    style={{height: 450, objectFit: 'cover'}}
                                />
                                <div style={{
                                    position: 'absolute', bottom: '20%',
                                    left: '10%',
                                    fontWeight: '800', color: '#fff'
                                }}>
                                    <h2 className={'OurMission w-75'}>STEM – образование</h2>
                                    <p style={{width: 350}}>«Science, Technology, Engineering and
                                        Mathematics» - наука, технология, инженерия и математика.
                                        Естественно-технические науки всегда были областью углубленного интереса в нашей
                                        школе. Робототехника и программирование дали возможность детям применить знания
                                        точных дисциплин на практике.
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item style={{position: "relative"}}>
                                <img
                                    className="d-block w-100"
                                    src={img5}
                                    style={{height: 450, objectFit: 'cover'}}
                                />
                                <div style={{
                                    position: 'absolute', bottom: '20%',
                                    left: '10%',
                                    fontWeight: '800', color: '#fff'
                                }}>
                                    <h2 className={'OurMission'}>Довузовская подготовка</h2>
                                    <p style={{width: 300}}>Одно из основных направлений школы, давших ей
                                        название «Малышок». Выпускников школы, определившихся с будущей профессией,
                                        готовят по профильным предметам, в том числе, по TOEFL, химии.
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item style={{position: "relative"}}>
                                <img
                                    className="d-block w-100"
                                    src={img6}
                                    style={{height: 450, objectFit: 'cover'}}
                                />
                                <div style={{
                                    position: 'absolute', bottom: '30%',
                                    left: '10%',
                                    fontWeight: '800', color: '#fff'
                                }}>
                                    <h2 className={'OurMission w-75'}>Школа шахмат</h2>
                                    <p style={{width: 300}}>Исследования показывают, что у детей, которые
                                        занимаются шахматами, повышается академическая успеваемость. Шахматы стали
                                        обязательным предметом в нашей школе.
                                    </p>
                                </div>
                            </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            {/*<HomeText/>*/}
        </div>
);
};

export default CaruselGroup;
