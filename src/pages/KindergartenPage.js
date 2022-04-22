import React from 'react';
import {Container, FloatingLabel, Form, Card, Carousel} from 'react-bootstrap'
import kinder2 from '../Image/CaruselImg/1.jpg';
import kinder1 from '../Image/CaruselImg/1.jpg';
import kinder3 from '../Image/CaruselImg/3.jpg';
import kinder4 from '../Image/CaruselImg/4.jpg';
import kinder5 from '../Image/CaruselImg/5.jpg';
import Contacts from "../containers/Сontacts";

const KindergartenPage = () => {
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
                            При начальной школе «Абитуриент плюс» функционирует детский сад. У детского сада свое
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
                                {/*<img*/}
                                {/*    className=" w-100"*/}
                                {/*    src={kinder6}*/}
                                {/*    alt='kinder1'*/}
                                {/*    style={{height: '20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}*/}
                                {/*/>*/}
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
                            Детский сад при школе «Абитуриент плюс» входит в сеть частных образовательных учреждений
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
            <Contacts/>
        </>
    );
};

export default KindergartenPage;
