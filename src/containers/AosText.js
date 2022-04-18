import React, {useEffect} from 'react';
import 'aos/dist/aos.css';
import Aos from "aos";
import {Card} from "react-bootstrap";


const AosText = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div style={{display: "flex", marginBottom: 50}}>

            <div style={{width: 400, marginLeft: 35}}>
                <div data-aos="fade-up">
                    <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}>
                        <Card.Body >
                            <Card.Title className={'chapter'}>Начальная школа</Card.Title>
                            <Card.Text>
                                В начальной школе закладываются основы знаний и умений, которые ребенок будет приумножать и
                                развивать в дальнейшем. Основное внимание уделяется формированию и развитию у детей умения
                                учиться. Научить ребенка учиться, привлечь его внимание к учебе как увлекательной области
                                исследований и открытий - именно в этом залог успешного и качественного образования в более
                                старшем возрасте.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div style={{width: 400, marginLeft: 35}}>
                <div data-aos="fade-up">
                    <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}>
                        <Card.Body>
                            <Card.Title className={'chapter'}>Детский сад</Card.Title>
                            <Card.Text>
                                При начальной школе «Абитуриент плюс» функционирует детский сад. У детского сада свое
                                отдельно
                                стоящее 2-х этажное здание. В детский сад принимаются дети, достигшие 4-х летнего
                                возраста.
                                Наполняемость групп детского сада до 20 человек. Образовательная программа
                                подразделяется на три
                                основных периода – средний, старший и дошкольный возраст.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>


            <div style={{width: 400, marginLeft: 35}}>
                <div data-aos="fade-up">
                    <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: "none"}}>
                        <Card.Body>
                            <Card.Title className={'chapter'}>Подготовка к школе</Card.Title>
                            <Card.Text>
                                Дошкольная подготовка- залог успешной учебы в школе. Для того чтобы успеть за все более
                                и более
                                повышающимися требованиями школьной программы, ребенок должен получить необходимые
                                навыки и
                                умения уже в период дошкольного детства. На этапе дошкольной подготовки малыш привыкает
                                к новой
                                обстановке и к требованиям обязательной дисциплины.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            

        </div>
    );
};

export default AosText;
