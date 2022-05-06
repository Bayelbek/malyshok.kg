import React from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'

const AosText = () => {
  return (
    <div>
      <Container>
        <Row style={{marginBottom: 50}} className={'justify-content-center'}>

          <Col sm={10} md={6} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
                    className={'h-100'}>
                <Card.Body>
                  <Card.Title className={'chapter'}>Начальная школа</Card.Title>
                  <Card.Text>
                    В начальной школе закладываются основы знаний и умений, которые ребенок будет
                    приумножать и
                    развивать в дальнейшем. Основное внимание уделяется формированию и развитию у
                    детей
                    умения
                    учиться. Научить ребенка учиться, привлечь его внимание к учебе как
                    увлекательной
                    области
                    исследований и открытий - именно в этом залог успешного и качественного
                    образования
                    в более
                    старшем возрасте.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col sm={10} md={6} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
                    className={'h-100'}>
                <Card.Body>
                  <Card.Title className={'chapter'}>Детский сад</Card.Title>
                  <Card.Text>
                    При начальной школе ОК«Малышок» функционирует детский сад. У детского сада
                    свое
                    отдельно
                    стоящее 2-х этажное здание. В детский сад принимаются дети, достигшие 4-х
                    летнего
                    возраста.
                    Наполняемость групп детского сада до 20 человек. Образовательная программа
                    подразделяется на три
                    основных периода – средний, старший и дошкольный возраст.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>


          <Col sm={10} md={6} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
                    className={'h-100'}>
                <Card.Body>
                  <Card.Title className={'chapter'}>Подготовка к школе</Card.Title>
                  <Card.Text>
                    Дошкольная подготовка- залог успешной учебы в школе. Для того чтобы успеть за
                    все
                    более
                    и более
                    повышающимися требованиями школьной программы, ребенок должен получить
                    необходимые
                    навыки и
                    умения уже в период дошкольного детства. На этапе дошкольной подготовки малыш
                    привыкает
                    к новой
                    обстановке и к требованиям обязательной дисциплины.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>


          <Col sm={10} md={6} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
                    className={'h-100'}>
                <Card.Body>
                  <Card.Title className={'chapter'}>Летний лагерь</Card.Title>
                  <Card.Text>
                    Как извлечь из трех летних месяцев максимальную пользу для здоровья и
                    интеллектуального развития ребенка?
                    В этом вам поможет лагерь дневного пребывания на базе начальной школы "Малышок"
                    с
                    насыщенной спортивной, развлекательной и образовательной программой. Каждый
                    день в лагере – это веселые занятия робототехникой и английским языком,
                    творчество
                    Сайт лагеря.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col sm={10} md={6}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
                    className={'h-100'}>
                <Card.Body>
                  <Card.Title className={'chapter'}>Старшая школа</Card.Title>
                  <Card.Text>
                    Старшая школа "Малышок" обеспечивает детям прекрасные возможности для получения
                    глубоких знаний по различным дисциплинам. Обучение в старшей школе с
                    педагогическим
                    коллективом и лучшими принципами воспитания дает воспитанникам отличный старт
                    для
                    дальнейшей учебы в престижных вузах и построения успешной карьеры.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AosText
