import React, {useState} from 'react'
import {Button, Col, Form, Image, Modal, Row} from 'react-bootstrap'
import logo from '../Image/CaruselImg/malyshok_edu_logo.jpg'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <div className={'mb-5'}>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Image src={logo} style={{width: 100, borderRadius: '100%'}}/>
                </div>
                <h4 className="text-center">ОК «МАЛЫШОК»</h4>
                <p className="text-center">Оставьте заявку и наш менеджер свяжется с Вами, чтобы записать
                  ребенка на вводное тестирование</p>
              </div>
              <Row>
                <div style={{display: "flex", justifyContent: 'center'}}>
                  <Col xs={12} md={8}>
                    <Form className={'mb-2'}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Ваше имя *"/>
                      </Form.Group>
                    </Form>
                    <Form className={'mb-4'}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Ваш телефон *"/>
                      </Form.Group>
                    </Form>
                    <p>Выберите отделение</p>
                    <Form.Select aria-label="Default select example" className={'mb-3'}>
                      <option>Начальная школа</option>
                      <option value="1">Детский сад</option>
                      <option value="2">Старшая школа</option>
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
                      }} onClick={handleClose}>ОСТАВИТЬ ЗАЯВКУ
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
  );
}

export default Example
