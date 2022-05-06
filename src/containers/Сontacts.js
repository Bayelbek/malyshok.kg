import React, {useState} from 'react'
import {Button, Card, Col, Form, Image, Row} from 'react-bootstrap'
import logo from '../images/CaruselImg/malyshok_edu_logo.jpg'
import ContactImage from '../images/contact/photo_2022-04-15_15-42-46.jpg'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FiPhone} from 'react-icons/fi'
import axios from 'axios'

const Contacts = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleCollo = () => {
    axios.get('https://api.telegram.org/bot5346125061:AAFtSCO-EQU22qkceOO7yCIIazfTd1aPvBI/sendMessage', {
      params: {
        chat_id: '868287401',
        text: `Заявка на звонок:\n\nИмя:${name}\nНомер:+996${phone.slice(1)}`,
      },
    })
    setTimeout(function () {
      setName('')
      setPhone('')
    }, 300)
  }

  const singUp_next = name.length <= 3 || phone.length !== 10

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className={'my-5'}
      >
        <Row>
          <Col md={6} xs={12} className={'p-0'}>
            <div className={'h-100 d-flex justify-content-center align-items-center'}
                 style={{backgroundColor: '#ebebeb', paddingBottom: 40, paddingTop: 40}}>
              <div>
                <div>
                  <div className={'text-center mb-3'}>
                    <Image src={logo} style={{width: 100, borderRadius: '100%'}}/>
                  </div>
                  <h4 className="text-center headerText">ОК «МАЛЫШОК»</h4>
                  <p className="text-center text-media p-3 text-muted">
                    Оставьте заявку и наш менеджер свяжется с Вами, чтобы
                    записать
                    ребенка на вводное тестирование
                  </p>
                </div>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Col xs={8} md={8}>
                    <Form className={'mb-3'}>
                      <Form.Control
                        className={'px-3 py-2'}
                        type="text"
                        placeholder="Ваше имя *"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                      <Form.Control
                        className={'px-3 py-2 mt-3'}
                        type="number"
                        placeholder="Ваш телефон *"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}/>
                    </Form>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Button
                        className="btn"
                        style={{
                          backgroundColor: '#0466ad',
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: '400',
                          paddingLeft: 40,
                          paddingRight: 40,
                          paddingTop: 10,
                          paddingBottom: 10,
                        }}
                        onClick={handleCollo}
                        disabled={singUp_next}
                      >ОСТАВИТЬ ЗАЯВКУ
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col className={'p-0'} xs={12} md={6}>
            <Image className={'h-100 w-100'} src={ContactImage} style={{objectFit: 'cover'}}/>
          </Col>
        </Row>
        <Row className={'mt-5 mx-3'}>
          <Col sm={10} md={6}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card
                style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
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
          <Col sm={10} md={6}>
            <div data-aos="fade-up" className={'h-100'}>
              <Card style={{backgroundColor: '#f5f5f5', borderRadius: 0, border: 'none'}}
                    className={'h-100 w-3 5'}>
                <Card.Body>
                  <Card.Title className={'chapter'}>СТАРШАЯ ШКОЛА</Card.Title>
                  <Card.Text>
                    Старшая школа находится по адресу: г.Ош мкр Анар.
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
      <div style={{backgroundColor: '#ebebeb'}} className={'pt-5'}>
        <div>
          <Row className={'d-flex justify-content-center text-center mb-5'}>
            <Col sm={6} md={4} lg={3} className={'justify-content-center d-flex flex-column align-items-center'}>
              <div style={{fontSize: '19px', fontWeight: 'bold'}}>
                СТАРШАЯ ШКОЛА:
              </div>
              <hr style={{width: 170}}/>
              <div className={'mb-2'}>
                <FaMapMarkerAlt className={'me-2'} style={{color: '#2c4f87'}}/> г.Ош мкр Анар
              </div>
              <div>
                <FiPhone className={'me-2'} style={{color: '#2c4f87'}}/> +996 702 127 077
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className={'justify-content-center d-flex flex-column align-items-center'}>
              <div style={{fontSize: '19px', fontWeight: 'bold'}}>
                НАЧАЛЬНАЯ ШКОЛА:
              </div>
              <hr style={{width: 170}}/>
              <div className={'mb-2'}>
                <FaMapMarkerAlt className={'me-2'} style={{color: '#2c4f87'}}/> г.Ош мкр Анар
              </div>
              <div>
                <FiPhone className={'me-2'} style={{color: '#2c4f87'}}/> +996 702 127 077
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className={'justify-content-center d-flex flex-column align-items-center'}>
              <div style={{fontSize: '19px', fontWeight: 'bold'}}>
                ДЕТСКИЙ САД:
              </div>
              <hr style={{width: 170}}/>
              <div className={'mb-2'}>
                <FaMapMarkerAlt className={'me-2'} style={{color: '#2c4f87'}}/> г.Ош мкр Анар
              </div>
              <div>
                <FiPhone className={'me-2'} style={{color: '#2c4f87'}}/> +996 702 127 077
              </div>
            </Col>
          </Row>
        </div>
        <div style={{backgroundColor: '#d1d1d2', width: '100%'}}>
          <p className={'text-center p-3 text-muted'} style={{fontSize: 14}}>Частная школа классического
            образования ОК «Малышок»
            <br/>
            © 2022 Все права защищены</p>
        </div>
      </div>
    </>
  )
}

export default Contacts
