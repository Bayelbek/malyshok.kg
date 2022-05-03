import React, {useState} from 'react';
import {Container, FloatingLabel, Form, Card, Carousel, Row, Col, Image, Button} from 'react-bootstrap'
import kinder2 from '../Image/CaruselImg/1.jpg';
import kinder1 from '../Image/CaruselImg/1.jpg';
import kinder3 from '../Image/CaruselImg/3.jpg';
import kinder4 from '../Image/CaruselImg/4.jpg';
import kinder5 from '../Image/CaruselImg/5.jpg';
import Contacts from "../containers/Сontacts";
import logo from "../Image/CaruselImg/malyshok_edu_logo.jpg";
import contacImg from "../Image/contact/photo_2022-04-15_15-42-46.jpg";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FiPhone} from "react-icons/fi";
import axios from "axios";
const KindergartenPage = () => {
    const [name , setName] = useState('');
    const [phone , setPhone] = useState('');
    const handleCollo = () =>{
        setName(name.value)
        setPhone('')
        axios.get('https://api.telegram.org/bot5346125061:AAFtSCO-EQU22qkceOO7yCIIazfTd1aPvBI/sendMessage',{
            params:{
                chat_id:'868287401',
                text:`Заявка на звонок:\n\nИмя:${name}\nНомер:+996${phone.slice(1)}`
            }
        })
        setTimeout(function() {
            setName('')
            setPhone('')
        },300)
    }
    const singUp_next = name.length <= 3 || phone.length !== 10

    return (
        <>
            <div className={'EducationScreen'}>
                <Carousel indicators={false} controls={false}>
                    <div className={'DetSadImg'}></div>
                    <div className={'EducOverlay'}></div>
                    <div className={'EducationText'}>
                        <div className={'ContainerL'}>
                            <div className={'EducTitle'}>СИЛЬНОЕ ЕСТЕСТВЕННО-ТЕХНИЧЕСКОЕ ОБРАЗОВАНИЕ</div>
                            <div className={'EducText'}>Сегодня в мире наблюдается рост спроса на инженеров нового поколения – разработчиков высоких технологий, владеющих математикой, методами моделирования, информатики, управления.</div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <Container>
                <div style={{width: '100%'}}>
                    <div style={{marginTop: '2rem'}}>
                        <p style={{marginTop: '2rem', marginBottom: '2rem'}}>
                            При начальной школе «Малышок» функционирует детский сад. У детского сада свое
                            отдельно стоящее 2-х этажное здание. В детский сад принимаются дети, достигшие 4-х летнего
                            возраста. Наполняемость групп детского сада до 20 человек.
                        </p>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className="row">
                            <div className="col-sm">
                                <img
                                    className=" w-100"
                                    src={kinder1}
                                    alt='kinder1'
                                    style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                                />
                            </div>
                            <div className="col-sm">
                                <img
                                    className=" w-100"
                                    src={kinder2}
                                    alt='kinder1'
                                    style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                                />
                            </div>
                            <div className="col-sm">
                                <img
                                    className=" w-100"
                                    src={kinder3}
                                    alt='kinder1'
                                    style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: 30}}>
                        <p>Преимущества детского сада:</p>
                        <ul>
                            <li>Удобное месторасположение в центре города</li>
                            <li>Отличное материальное оснащение + собственное футбольное поле с искусственной травой</li>
                            <li>Режим работы с 8.00 до 18.30 (пн-пт)</li>
                            <li>Занятия ведутся в мини-группах по 6 человек</li>
                            <li>Красочные праздники и утренники</li>
                            <li>Робототехника с 6 лет (Lego Education WeDo 2.0)</li>
                            <li>Футбол и шахматы с 6 лет с профессиональным тренером</li>
                            <li>Английский и кыргызский с 4-х лет</li>
                            <li>Медицинское сопровождение учебного процесса: наблюдение штатным врачом педиатром, ежегодные мед.осмотры узкими специалистами</li>
                            <li>4-разовое питание с учетом всех возрастных потребностей</li>
                        </ul>
                    </div>



                    <div style={{width: '100%'}}>

                        <div className="row">
                            <div className="col-sm">
                                <img
                                    className=" w-100"
                                    src={kinder4}
                                    alt='kinder1'
                                    style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                                />
                            </div>
                            <div className="col-sm">
                                <img
                                    className=" w-100"
                                    src={kinder5}
                                    alt='kinder1'
                                    style={{height: '20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: '2rem'}}>
                        <p style={{marginTop: '2rem'}}>
                            Детский сад при школе «Малышок» входит в сеть частных образовательных учреждений
                            «Абитуриент» и соответствует высоким стандартам обучения этой сетp
                        </p>
                    </div>
                    <div style={{marginTop: '2rem'}}>
                        <p style={{marginTop: '2rem'}}>
                            Образовательная программа подразделяется на три основных периода – средний, старший и
                            дошкольный возраст. Внутри каждого из этих периодов она представлена основным блоком
                            предметов:
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                Развитие речи
                            </li>
                            <li>

                                Ознакомление с окружающим миром

                            </li>
                            <li>
                                Введение в математику

                            </li>
                            <li>

                                Введение в художественную литературу

                            </li>
                        </ul>

                        и дополнительным блоком:

                        <ul>
                            <li>

                                Музыка

                            </li>
                            <li>

                                Хореография

                            </li>
                            <li>

                                Творчество

                            </li>

                        </ul>
                        <p>
                            Только у нас:
                        </p>
                        <ul>
                            <li>
                                Робототехника с 6 лет (Lego Education WeDo 2.0)

                            </li>
                            <li>
                                Футбол и шахматы с 6 лет с профессиональным тренером

                            </li>
                            <li>
                                Социально-личностное развитие на уроках психологии с 6-ти лет

                            </li>
                            <li>
                                Французский язык (факультативно)

                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div  style={{margin: 0}}>
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
                                            <Form.Group className="mb-3"
                                                        controlId="formBasicEmail">
                                                <Form.Control
                                                    style={{paddingTop: 10,
                                                        paddingBottom: 10}} type="text"
                                                    placeholder="Ваше имя *"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}/>
                                            </Form.Group>
                                        </Form>
                                        <Form className={'mb-5'}>
                                            <Form.Group className="mb-3"
                                                        controlId="formBasicEmail">
                                                <Form.Control
                                                    style={{paddingTop: 10,
                                                        paddingBottom: 10}} type="number"
                                                    placeholder="Ваш телефон *"
                                                    value={phone}
                                                    onChange={e => setPhone(e.target.value)}/>
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
                                            }} onClick={handleCollo}
                                            disabled={singUp_next}
                                            >ОСТАВИТЬ ЗАЯВКУ
                                            </Button>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{padding: 0, margin: 0}} xs={12} md={6}>
                        <Image className={'h-100'} src={contacImg} style={{width: '100%', height: 500, objectFit: "cover"}}/>
                    </Col>
                    <Col sm={10} md={6} style={{marginTop: 50}}>
                        <div  className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100 w-35'}>
                                <Card.Body>
                                    <Card.Title className={'chapter'}>НАЧАЛЬНАЯ ШКОЛА</Card.Title>
                                    <Card.Text>
                                        Начальная школа находится по адресу мкр Анар. У школы свое отдельно стоящее
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
                        <div  className={'h-100'}>
                            <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}
                                  className={'h-100 w-3 5'}>
                                <Card.Body>
                                    <Card.Title className={'chapter'}>СТАРШАЯ ШКОЛА</Card.Title>
                                    <Card.Text>
                                        Старшая школа находится по адресу: г.Ош мкр Анар,
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
                                    г.Ош мкр Анар<br/>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        +996 702 127 077<br/>
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
                                        г.Ош мкр Анар<br/>
                                    </p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        г.Ош мкр Анар<br/>
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
                                        г.Ош мкр Анар<br/>
                                    </p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        +996 702 127 077
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
                                        г.Ош мкр Анар<br/>
                                    </p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FiPhone style={{marginTop: 5, marginRight: 10, color: '#2c4f87'}}/>
                                    <p>
                                        +996 702 127 077
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

                export default KindergartenPage;
