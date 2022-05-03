import React, {useState} from 'react';
import {Button, Col, Form, Image, Modal, Row} from "react-bootstrap";
import axios from "axios";
import logo from "../Image/CaruselImg/malyshok_edu_logo.jpg";

const ImgCarousel = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');


    const handleClose = () => {
        setShow(false)
        axios.get('https://api.telegram.org/bot5346125061:AAFtSCO-EQU22qkceOO7yCIIazfTd1aPvBI/sendMessage', {
            params: {
                chat_id: '868287401',
                text: `Заявка на звонок:\n\nИмя:${name}\nНомер:+996${phone.slice(1)}\nОтделение: ${option}`
            }
        })
        setTimeout(function () {
            setName('')
            setPhone('')
        }, 300)
    }

    const singUp_next = name.length <= 3 || phone.length !== 10

    return (
        <div>
            <div style={{marginBottom: 50}}>
                <div data-aos="fade-up">
                    <div className='main'>
                        <div className='main_hero'>
                            <div className='main_inner'>
                                <div className='main_text_1'>
                                    Школа Классического Образования ОК«Малышок»
                                </div>
                                <div className='main_text_2'>
                                    КЛАССИЧЕСКОЕ ОБРАЗОВАНИЕ ВСЕГДА ОСТАЕТСЯ СОВРЕМЕННЫМ
                                </div>
                                <div className='main_text_3'>
                                    Ваш ребенок получит гармоничное умственное, физическое и нравственное развитие.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgCarousel;
