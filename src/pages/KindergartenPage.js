import React from 'react'
import {Container, Carousel} from 'react-bootstrap'
import kinder2 from '../images/CaruselImg/1.jpg'
import kinder1 from '../images/CaruselImg/1.jpg'
import kinder3 from '../images/CaruselImg/3.jpg'
import kinder4 from '../images/CaruselImg/4.jpg'
import kinder5 from '../images/CaruselImg/5.jpg'
import Contacts from '../containers/Сontacts'

const KindergartenPage = () => {
  return (
    <>
      <div className="box_content footer_form">
        <div className="footer_form_bg wow fadeInRight" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer_form_left wow fadeInLeft"
                 style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
              <div className="footer_form_logo">
                <noscript>
                  <img src="https://abiturient.kg/wp-content/themes/abiturientkg/images/logo.png" alt=""/>
                </noscript>
                <img className=" ls-is-cached lazyloaded"
                     src="https://abiturient.kg/wp-content/themes/abiturientkg/images/logo.png"
                     data-src="https://abiturient.kg/wp-content/themes/abiturientkg/images/logo.png" alt=""/>
              </div>
              <div className="footer_form_title">Оставьте заявку и наш менеджер свяжется с Вами, чтобы записать ребенка
                на вводное тестирование
              </div>
              <div role="form" className="wpcf7" id="wpcf7-f8-o1" lang="ru-RU" dir="ltr">
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true">
                  </p>
                  <ul>
                  </ul>
                </div>
                <form action="/silnoe_obrazovanie.html#wpcf7-f8-o1" method="post" className="wpcf7-form init"
                      novalidate="novalidate" data-status="init">
                  <div style={{display: 'none'}}>
                    <input type="hidden" name="_wpcf7" value="8"/>
                    <input type="hidden" name="_wpcf7_version" value="5.4.2"/>
                    <input type="hidden" name="_wpcf7_locale" value="ru_RU"/>
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8-o1"/>
                    <input type="hidden" name="_wpcf7_container_post" value="0"/>
                    <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
                  </div>
                  <div className="form-group">
                                        <span className="wpcf7-form-control-wrap book_name">
                                            <input type="text" name="book_name" value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                                   aria-required="true" aria-invalid="false" placeholder="Ваше имя *"/>
                                        </span>
                  </div>
                  <div className="form-group">
                                        <span className="wpcf7-form-control-wrap book_tel">
                                            <input type="tel" name="book_tel" value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                                                   aria-required="true" aria-invalid="false"
                                                   placeholder="Ваш телефон *"/>
                                        </span>
                  </div>
                  <div className="form-group"> Выберите отделение</div>
                  <div className="form-group">
                                        <span className="wpcf7-form-control-wrap book_class">
                                            <select name="book_class"
                                                    className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-control"
                                                    aria-required="true" aria-invalid="false">
                                                <option value="Начальная школа">Начальная школа</option>
                                                <option value="Детский сад">Детский сад</option>
                                                <option value="Старшая школа">Старшая школа</option>
                                            </select>
                                        </span>
                  </div>
                  <div className="form-group-submit text-center">
                    <input type="submit" value="Оставить заявку"
                           className="wpcf7-form-control wpcf7-submit btn btn-primary"/>
                    <span className="ajax-loader">
                                        </span>
                  </div>
                  <div className="wpcf7-response-output" aria-hidden="true">
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 footer_form_right wow fadeInRight"
                 style={{visibility: 'visible', animationName: 'fadeInRight'}}>
              <div className="footer_form_info_title">Количество мест ограничено!</div>
              <div classNmae="footer_form_info_subtitle">Всего осталось:</div>
              <ul className="footer_form_info_list">
                <li>
                  <span className="left">Начальная школа:</span>
                  <span className="right"><span>5</span> мест</span>
                </li>
                <li>
                  <span className="left">Старшая школа:</span>
                  <span className="right"><span>8</span> мест</span>
                </li>
              </ul>
              <div className="footer_form_info_footer">Спешите оставить заявку до окончания набора!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'EducationScreen'}>
        <Carousel indicators={false} controls={false}>
          <div className={'DetSadImg'}></div>
          <div className={'EducOverlay'}></div>
          <div className={'EducationText'}>
            <div className={'ContainerL'}>
              <div className={'EducTitle'}>СИЛЬНОЕ ЕСТЕСТВЕННО-ТЕХНИЧЕСКОЕ ОБРАЗОВАНИЕ</div>
              <div className={'EducText'}>Сегодня в мире наблюдается рост спроса на инженеров нового поколения –
                разработчиков высоких технологий, владеющих математикой, методами моделирования, информатики,
                управления.
              </div>
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
                  alt="kinder1"
                  style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                />
              </div>
              <div className="col-sm">
                <img
                  className=" w-100"
                  src={kinder2}
                  alt="kinder1"
                  style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                />
              </div>
              <div className="col-sm">
                <img
                  className=" w-100"
                  src={kinder3}
                  alt="kinder1"
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
              <li>Медицинское сопровождение учебного процесса: наблюдение штатным врачом педиатром, ежегодные
                мед.осмотры узкими специалистами
              </li>
              <li>4-разовое питание с учетом всех возрастных потребностей</li>
            </ul>
          </div>


          <div style={{width: '100%'}}>

            <div className="row">
              <div className="col-sm">
                <img
                  className=" w-100"
                  src={kinder4}
                  alt="kinder1"
                  style={{height: ' 20rem', objectFit: 'cover', width: '12rem', margin: '1%'}}
                />
              </div>
              <div className="col-sm">
                <img
                  className=" w-100"
                  src={kinder5}
                  alt="kinder1"
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
  )
}

export default KindergartenPage
