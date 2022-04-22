import React, {useState} from "react";
import {Button, Card, Col, Container, Form, Image, InputGroup, NavLink, Row} from "react-bootstrap";
import logo from '../Image/CaruselImg/malyshok_edu_logo.jpg'
import contacImg from '../Image/contact/photo_2022-04-15_15-42-46.jpg'
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FiPhone} from 'react-icons/fi';

const Contacts = () => {

    return (
        <>
            <div data-aos="fade-up"
                 data-aos-duration="3000" style={{margin: 0}}>
                <Row style={{margin: 0, marginTop: 20}}>
                    <Col md={6} xs={12} style={{padding: 0}}>
                        <div className={'h-100'}
                             style={{backgroundColor: '#ebebeb', paddingBottom: 40, paddingTop: 40, marginBottom: 10}}>
                            <div className={'mb-5'}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <Image src={logo} style={{width: 100, borderRadius: '100%'}}/>
                                </div>
                                <h4 className="text-center headerText">ОК «МАЛЫШОК»</h4>
                                <p className="text-center textmedia">Оставьте заявку и наш менеджер свяжется с Вами, чтобы
                                    записать
                                    ребенка на вводное тестирование</p>
                            </div>
                            <Row>
                                <div style={{display: "flex", justifyContent: 'center'}}>
                                    <Col xs={8} md={8}>
                                        <Form className={'mb-5'}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control style={{paddingTop: 10, paddingBottom: 10}} type="text"
                                                              placeholder="Ваше имя *"/>
                                            </Form.Group>
                                        </Form>
                                        <Form className={'mb-5'}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control style={{paddingTop: 10, paddingBottom: 10}} type="number"
                                                              placeholder="Ваш телефон *"/>
                                            </Form.Group>
                                        </Form>


                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <Button className="btn" style={{
                                                backgroundColor: '#0466ad',
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: "400",
                                                paddingLeft: 40,
                                                paddingRight: 40,
                                                paddingTop: 10,
                                                paddingBottom: 10
                                            }}>ОСТАВИТЬ ЗАЯВКУ
                                            </Button>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{padding: 0, margin: 0}} xs={12} md={6}>

                        <Image className={'h-100'} src={contacImg}
                               style={{width: '100%', height: 500, objectFit: "cover"}}/>

                    </Col>

                    <Col sm={10} md={6} style={{marginTop: 50}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100 w-35'}>
                                <Card.Body>
                                    <Card.Title className={'chapter'}>НАЧАЛЬНАЯ ШКОЛА</Card.Title>
                                    <Card.Text>
                                        Начальная школа находится по адресу Исанова 4. У школы свое отдельно стоящее
                                        двухэтажное здание,
                                        охраняемая территория, современное футбольное поле с искусственной травой,
                                        хорошо
                                        оснащенные
                                        классы.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col sm={10} md={6} style={{marginTop: 50}}>
                        <div data-aos="fade-up" className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100 w-3 5'}>
                                <Card.Body>
                                    <Card.Title className={'chapter'}>СТАРШАЯ ШКОЛА</Card.Title>
                                    <Card.Text>
                                        Старшая школа находится по адресу: проспект Ч. Айтматова (б. пр. Мира) 12,
                                        напротив Госрегистра.
                                        У школы свое отдельно стоящее двухэтажное здание, охраняемая территория,
                                        современная спортивная
                                        площадка с травмобезопасным покрытием.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>

            <div style={{
                height: '100%',
                backgroundColor: '#ebebeb',
                marginTop: 50,
                paddingTop: 50,
            }}>
                <div style={{display: 'flex', justifyContent: "center", alignItems: "center",}}>
                    <div className='row' style={{display: 'flex', marginLeft: 15}}>
                        <Col style={{margin: 20}}>
                            <div style={{width: '15rem', margin: '1rem'}}>
                               <span style={{fontSize: '19px', fontWeight: 'bold'}}>
                               СТАРШАЯ ШКОЛА:
                           </span>
                                <br/>
                                <hr style={{width: 170}}/>
                                <div style={{display: 'flex', marginBottom: 15}}>
                                    <FaMapMarkerAlt style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    г. Бишкек, 720052,<br/>
                                    пр. Мира, 12
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        0312 316 022<br/>
                                        0557 477 070
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col style={{margin: 20}}>
                            <div style={{width: '15rem', margin: '1rem'}}>
                                <span style={{fontSize: '19px', fontWeight: 'bold'}}>
                               НАЧАЛЬНАЯ ШКОЛА:
                           </span>
                                <br/>
                                <hr style={{width: 200}}/>
                                <div style={{display: 'flex'}}>
                                    <FaMapMarkerAlt style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        г. Бишкек, 720052,<br/>
                                        ул. Исанова 4-Б
                                    </p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        0312 316 370<br/>
                                        0551 404 142
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col style={{margin: 20}}>
                            <div style={{width: '15rem', margin: '1rem'}}>
                               <span style={{fontSize: '19px', fontWeight: 'bold'}}>
                              ДЕТСКИЙ САД:
                           </span>
                                <br/>
                                <hr style={{width: 140}}/>
                                <div style={{display: 'flex'}}>
                                    <FaMapMarkerAlt style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        г. Бишкек,<br/>
                                        Исанова-Боконбаева
                                    </p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        0551 404 142
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col style={{marginTop: 20}}>
                            <div style={{width: '15rem', margin: '1rem', marginLeft: 25}}>
                               <span style={{fontSize: '19px', fontWeight: 'bold'}}>
                              ДЕТСКИЙ САД:
                           </span>
                                <br/>
                                <hr style={{width: 140}}/>
                                <div style={{display: 'flex'}}>
                                    <FaMapMarkerAlt style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        г. Бишкек,<br/>
                                        3 микрорайон
                                    </p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        0558 909 020
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
                <div style={{backgroundColor: '#d1d1d2', width: '100%'}}>
                    <p style={{fontSize: 14, marginLeft: 50, paddingTop: 20, paddingBottom: 20}}>Частная школа классического образования ОК «Малышок»
                        <br/>
                        © 2022 Все права защищены</p>
                </div>
            </div>
        </>
    );
};
export default Contacts;
