import React, {useState} from "react";
import {Button, Col, Container, Form, Image, InputGroup, NavLink, Row} from "react-bootstrap";
import logo from '../Image/CaruselImg/malyshok_edu_logo.jpg'
import contacImg from '../Image/contact/photo_2022-04-15_15-42-46.jpg'

const Contacts = () => {

    return (
        <div data-aos="fade-up"
             data-aos-duration="3000">
            <Row style={{margin: 0, marginBottom: 20}}>
                <Col md={6} xs={12} style={{padding: 0}}>
                    <div className={'h-100'}
                         style={{backgroundColor: '#ebebeb', paddingBottom: 40, paddingTop: 40, marginBottom: 10}}>
                        <div className={'mb-5'}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <NavLink to="/"><Image src={logo} style={{width: 100, borderRadius: '100%'}}/></NavLink>
                            </div>
                            <h4 className="text-center">«МАЛЫШОК»</h4>
                            <p className="text-center">Оставьте заявку и наш менеджер свяжется с Вами, чтобы записать
                                ребенка на вводное тестирование</p>
                        </div>
                        <Row>
                            <div style={{display: "flex", justifyContent: 'center'}}>
                                <Col xs={12} md={8}>
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
                           style={{width: '100%',height: 500, objectFit: "cover"}}/>

                </Col>
            </Row>
        </div>
    );
};

export default Contacts;
