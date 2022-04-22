import React from 'react';
import {Carousel} from 'react-bootstrap'
import Contacts from '../containers/Сontacts'

const EducationPage = () => {
    return (
      <>
        <div className={'EducationScreen'}>
          <Carousel indicators={false} controls={false}>
              <div className={'Educationimg'}></div>
              <div className={'EducOverlay'}></div>
              <div className={'EducationText'}>
                <div className={'ContainerL'}>
                  <div className={'EducTitle'}>СИЛЬНОЕ ЕСТЕСТВЕННО-ТЕХНИЧЕСКОЕ ОБРАЗОВАНИЕ</div>
                  <div className={'EducText'}>Сегодня в мире наблюдается рост спроса на инженеров нового поколения – разработчиков высоких технологий, владеющих математикой, методами моделирования, информатики, управления.</div>
                </div>
              </div>
          </Carousel>
          <div className={'EducationBread'}>
            <div className={'EducContainer'}>
                <span>
                  <a href={'https://abiturient.kg/'} style={{color:'gray'}}>Главная    > </a>
                  <span className={'EducBreadCrumbs'} aria-current={'page'}>Сильное естественно-техническое образование</span>
                </span>
            </div>
          </div>
          <section className={'EducBoxContent'}>
            <div className={'EducContainer'}>
              <div className={'EducPageContent'}>
                <p className={'EducPageText'}>Большинство исследователей, представители общественности и бизнеса считают, что необходимо подготовить массу выпускников с такими умениями и навыками, которые удовлетворят потребность в специализированных трудовых ресурсах XXI века в областях химической технологии и фармакологии, источников энергии и машиностроения, микроэлектроники и средств коммуникации.</p>
                <p className={'EducPageText'}>Школа «Абитуриент» использует проверенные десятилетиями методики преподавания и программы с высоким теоретическим уровнем. Это позволяет получить такие знания и достичь такого уровня развития мышления детей, которые необходимы для успеха в перечисленных областях.</p>
                <ul>
                  <li>Первоочередное внимание уделяется математике – основе для изучения естественно-технических наук и как средству интеллектуального роста.</li>
                  <li>Насыщенная программа по физике позволяет приобрести достаточно знаний для того, чтобы разобраться в достижениях современной науки и техники.</li>
                  <li>Обучение химии имеет технологическую направленность и насыщено экспериментом.<a>Ссылка на канал Youtube</a></li>
                  <li>Курс инженерного конструирования (робототехники) связан с перечисленными науками и с компьютерным программированием. Практика в этом курсе имеет комплексный характер.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <Contacts />
      </>
    );
};

export default EducationPage;
