import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import logo1 from '../Image/logo/main_why_2.png'
import logo2 from '../Image/logo/main_why_4.png'
import logo3 from '../Image/logo/main_why_6.png'

const HomeText = () => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", marginTop: 50, marginBottom: 50}}
                 data-aos="zoom-in">
                <div style={{width: 600}}>
                    <div style={{textAlign: "center"}}>
                        <h2 className={'\n' +
                        'OurMission'}>ПОЧЕМУ РОДИТЕЛИ ВЫБИРАЮТ НАС</h2>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <hr style={{width: 200}}/>
                        </div>
                        <p style={{fontWeight: '400', fontSize: 18}}>Частная школа «Малышок» по праву считается одной из
                            лучших частных школ г. Ош. За 17 лет наша школа успела завоевать себе отличную репутацию.
                            Образование в школе основано на лучших традициях академического обучения и предусматривает
                            фундаментальное изучение школьных дисциплин, углубленное изучение профилирующих предметов,
                            воспитание гармоничной, всесторонне развитой личности.</p>
                    </div>
                </div>
            </div>
            <Container>
                <Row style={{marginBottom: 50}} className={'justify-content-center'}>

                    <Col sm={12} md={4} style={{marginBottom: 20}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100'}>
                                <Card.Body>
                                    <Card.Title className={'chapter_home'}>Лучшие учителя</Card.Title>
                                    <Card.Text>
                                        У нас работают только лучшие преподаватели, настоящие специалисты своего дела,
                                        способные не только делиться своими знаниями, но и создавать атмосферу
                                        творчества и открытий на уроках.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col sm={12} md={4} style={{marginBottom: 20}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{
                                backgroundColor: '#f5f5f5',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 0,
                                border: "none"
                            }}
                                  className={'h-100'}>
                                <div>
                                    <div  className={'d-flex justify-content-center mt-2'}>
                                        <Card.Img variant="top" src={logo1} style={{width: 130,}}/>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className={'chapter_home'}>Сильное
                                            естественно-техническое образование</Card.Title>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
                    </Col>


                    <Col sm={12} md={4} style={{marginBottom: 20}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100'}>
                                <Card.Body>
                                    <Card.Title className={'chapter_home'}>Подготовка к TOEFL как обязательный
                                        предмет</Card.Title>
                                    <Card.Text>
                                        TOEFL - это самый популярный экзамен северо-американского английского и к тому
                                        же самый широко распространенный тест английского языка в мире. Наши выпускники
                                        не только успешно сдают экзамен, но и в совершенстве овладевают английским
                                        языком.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>


                    <Col sm={12} md={4} style={{marginBottom: 20}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{
                                backgroundColor: '#f5f5f5',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 0,
                                border: "none"
                            }}
                                  className={'h-100'}>
                               <div>
                                   <div className={'d-flex justify-content-center mt-2'}>
                                       <Card.Img variant="top" src={logo2} style={{width: 130,}}/>
                                   </div>
                                   <Card.Body>
                                       <Card.Title className={'chapter_home'}>Успешная
                                           социализация</Card.Title>
                                   </Card.Body>
                               </div>
                            </Card>
                        </div>
                    </Col>

                    <Col sm={12} md={4} style={{marginBottom: 20}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100'}>
                                <Card.Body>
                                    <Card.Title className={'chapter_home'}>Довузовская подготовка</Card.Title>
                                    <Card.Text>
                                        Довузовская подготовка является одним из приоритетных направлений работы нашей
                                        школы. Само название школы говорит о том, что выпускники нашей школы
                                        гарантированно поступают в ВУЗ по их выбору, а школа обеспечивает профильную
                                        подготовку, начиная с 10 класса.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>


                    <Col sm={12} md={4} mt={3} style={{marginBottom: 20}}>
                        <div data-aos="fade-up"  className={'h-100'}>
                            <Card className={'d-flex align-items-center h-100'} style={{
                                backgroundColor: '#f5f5f5',
                                borderRadius: 0,
                                border: "none",
                                justifyContent: "center"
                            }}>
                                <div>
                                    <div className={'d-flex justify-content-center mt-2'}>
                                        <Card.Img variant="top" src={logo3} style={{width: 130,}}/>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className={'chapter_home'}>STEM - образование
                                            с 1-го класса</Card.Title>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeText;
