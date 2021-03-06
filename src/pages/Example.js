import React, {useState} from 'react'
import {Button, Col, Form, Image, Modal, Row} from 'react-bootstrap'
import logo from '../images/CaruselImg/malyshok_edu_logo.jpg'
import axios from 'axios'

function Example() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [option , setOption] = useState('');

  const handleClose = () =>{
    setShow(false)
    axios.get('https://api.telegram.org/bot5346125061:AAFtSCO-EQU22qkceOO7yCIIazfTd1aPvBI/sendMessage',{
        params:{
          chat_id:'868287401',
          text:`Заявка на звонок:\n\nИмя:${name}\nНомер:+996${phone.slice(1)}\nОтделение: ${option}`
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
      <Button style={{backgroundColor: '#0466ad'}} onClick={handleShow}>
        ПОСТУПИТЬ В ШКОЛУ
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Row >
          <Col md={12} xs={12} style={{padding: 0}}>
            <div className={'h-100'}
                 style={{backgroundColor: '#ebebeb', paddingBottom: 40, paddingTop: 40, marginBottom: 10}}>
              <div className={'mb-4'}>
                <div className={'mb-3'} style={{display: "flex", justifyContent: "center"}}>
                  <Image src={logo} style={{width: 100, borderRadius: '100%'}}/>
                </div>
                <h4 className="text-center">ОК «МАЛЫШОК»</h4>
                <p className="text-center text-muted">Оставьте заявку и наш менеджер свяжется с Вами, чтобы записать
                  ребенка на вводное тестирование</p>
              </div>
              <Row>
                <div style={{display: "flex", justifyContent: 'center'}}>
                  <Col xs={12} md={8}>
                    <Form className={'mb-2'}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                        type="text"
                        placeholder="Ваше имя *"
                        value={name}
                         onChange={e => setName(e.target.value)}
                         />
                      </Form.Group>
                    </Form>
                    <Form className={'mb-2'}>
                      <Form.Group controlId="formBasicNumber">
                        <Form.Control
                        type="number"
                        placeholder="Ваш телефон *"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                    <p className={'mb-1 mt-2 text-muted'}>Выберите отделение</p>
                    <Form.Select aria-label="Default select example" className={'mb-3'} onChange={e => setOption(e.target.value)} >
                      <option value='Начальная школа'>Начальная школа</option>
                      <option value="Детский сад">Детский сад</option>
                      <option value="Старшая школа">Старшая школа</option>
                    </Form.Select>
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
                      }}
                      disabled={singUp_next}
                      onClick={handleClose}>
                        ОСТАВИТЬ ЗАЯВКУ
                      </Button>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default Example
