import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import logo1 from '../images/logo/main_why_2.png'
import logo2 from '../images/logo/main_why_4.png'
import logo3 from '../images/logo/main_why_6.png'
import logotext from '../images/textlogo/main_education_1.jpg'
import logotext2 from '../images/textlogo/main_education_2.jpg'
import logotext3 from '../images/textlogo/main_education_3.jpg'

const HomeText = () => {
  return (
    <div>
      <Container>
        <div
          style={{display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 50}}
          data-aos="zoom-in"
        >
          <div style={{width: 600}}>
            <div style={{textAlign: 'center'}}>
              <h2 className={'OurMission'}>ПОЧЕМУ РОДИТЕЛИ ВЫБИРАЮТ НАС</h2>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <hr style={{width: 200}}/>
              </div>
              <p className={'text-muted'}>
                Частная школа «Малышок» по праву считается одной из
                лучших частных школ г. Ош. За 7 лет наша школа успела завоевать себе отличную
                репутацию.
                Образование в школе основано на лучших традициях академического обучения и
                предусматривает
                фундаментальное изучение школьных дисциплин, углубленное изучение профилирующих
                предметов,
                воспитание гармоничной, всесторонне развитой личности.
              </p>
            </div>
          </div>
        </div>

        <Row className={'justify-content-center mb-5'}>

          <Col sm={10} md={6} lg={4} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
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

          <Col sm={10} md={6} lg={4} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card
                style={{
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 0,
                  border: 'none',
                }}
                className={'h-100'}
              >
                <div>
                  <div className={'d-flex justify-content-center mt-2'}>
                    <Card.Img variant="top" src={logo1} style={{width: 130}}/>
                  </div>
                  <Card.Body>
                    <Card.Title className={'chapter_home'}>Сильное естественно-техническое образование</Card.Title>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </Col>

          <Col sm={10} md={6} lg={4} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
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

          <Col sm={10} md={6} lg={4} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 0,
                border: 'none',
              }}
                    className={'h-100'}>
                <div>
                  <div className={'d-flex justify-content-center mt-2'}>
                    <Card.Img variant="top" src={logo2} style={{width: 130}}/>
                  </div>
                  <Card.Body>
                    <Card.Title className={'chapter_home'}>Успешная социализация</Card.Title>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </Col>

          <Col sm={10} md={6} lg={4} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
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

          <Col sm={10} md={6} lg={4} style={{marginBottom: 20}}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card className={'d-flex align-items-center h-100'} style={{
                backgroundColor: '#f5f5f5',
                borderRadius: 0,
                border: 'none',
                justifyContent: 'center',
              }}>
                <div>
                  <div className={'d-flex justify-content-center mt-2'}>
                    <Card.Img variant="top" src={logo3} style={{width: 130}}/>
                  </div>
                  <Card.Body>
                    <Card.Title className={'chapter_home'}>STEM - образование с 1-го класса</Card.Title>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        <div data-aos="zoom-in">
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 50}}>
            <div style={{width: 600}}>
              <div style={{textAlign: 'center'}}>
                <h2 className={'OurMission'}>ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <hr style={{width: 200}}/>
                </div>
                <p style={{fontWeight: '400', fontSize: 18}} className={'text-muted'}>
                  Когда ребенок проводит в школе целый день,
                  то у него не остается времени на посещение кружков. У учащихся нашей школы есть
                  возможность посещать разнообразные клубы и секции, не покидая школы.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'overflow-hidden'}>
          <div data-aos="fade-right">
            <Row>
              <Col xs={12} md={2}>
                <div className={'d-flex justify-content-center mt-2'}>
                  <Card.Img variant="top" src={logotext} style={{width: 130}}/>
                </div>
              </Col>

              <Col xs={12} md={10}>
                <Card.Body>
                  <Card.Title>Интеллектуальное
                    направление</Card.Title>
                  <Card.Text className={'text-muted'}>
                    Лишних знаний не бывает. Если вы хотите сделать упор на развитие
                    умственных способностей вашего ребенка, повысить его образовательные
                    результаты, развить память, подготовить к важным экзаменам или улучшить
                    владение английским языком, то мы готовы вам помочь.
                  </Card.Text>
                  <Button variant="outline-primary" className="custom-btn">ПОДРОБНЕЕ</Button>
                </Card.Body>
              </Col>
            </Row>
          </div>

          <hr/>

          <div data-aos="fade-left">
            <Row>
              <Col xs={12} md={10}>
                <Card.Body>
                  <Card.Title>Спортивное направление</Card.Title>
                  <Card.Text className={'text-muted'}>
                    Полноценное развитие ребенка подразумевает регулярные занятия спортом. Привитие
                    активного образа жизни с юных лет не только способствует формированию здорового
                    организма, но и предоставляет возможности для социального развития, укрепления
                    самооценки.
                  </Card.Text>
                  <Button variant="outline-primary">ПОДРОБНЕЕ</Button>
                </Card.Body>
              </Col>

              <Col xs={12} md={2}>
                <div className={'d-flex justify-content-center mt-2'}>
                  <Card.Img variant="top" src={logotext2} style={{width: 130}}/>
                </div>
              </Col>
            </Row>
          </div>

          <hr/>

          <div data-aos="fade-right">
            <Row>
              <Col xs={12} md={2}>
                <div className={'d-flex justify-content-center mt-2'}>
                  <Card.Img variant="top" src={logotext3} style={{width: 130}}/>
                </div>
              </Col>

              <Col xs={12} md={10}>
                <Card.Body>
                  <Card.Title>Музыкально-эстетическое направление</Card.Title>
                  <Card.Text className={'text-muted'}>
                    В современном мире одной из главных ценностей является формирование творческого,
                    свободно мыслящего, обладающего высокой культурой человека. Творческий потенциал
                    в современном обществе очень ценится в любой профессии, поэтому его нужно
                    раскрывать в ребёнке как можно раньше.
                  </Card.Text>
                  <Button variant="outline-primary">ПОДРОБНЕЕ</Button>
                </Card.Body>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeText
