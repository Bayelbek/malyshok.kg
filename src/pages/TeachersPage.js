import React from 'react';
import {Carousel} from 'react-bootstrap'
import Contacts from '../containers/Сontacts'

const TeachersPage = () => {
    return (
      <>
        <div className={'EducationScreen'}>
          <Carousel indicators={false} controls={false}>
            <div className={'EducationimgTeacher'}></div>
            <div className={'EducOverlay'}></div>
            <div className={'EducationText'}>
              <div className={'ContainerL'}>
                <div className={'EducTitle'}>НАШИ УЧИТЕЛЯ</div>
                <div className={'EducText'}>Наша школа, действуя в духе лучших педагогических традиций, способствует максимальному развитию личности ученика, обеспечивает перспективы его жизненного успеха и открывает двери в университеты мира.</div>
              </div>
            </div>
          </Carousel>
          <div className={'EducationBread'}>
            <div className={'EducContainer'}>
                <span>
                  <a href={'https://abiturient.kg/'} style={{color:'gray'}}>Главная    > </a>
                  <span className={'EducBreadCrumbs'} aria-current={'page'}>Учителя</span>
                </span>
            </div>
          </div>
        </div>
        <Contacts />
      </>
    );
};

export default TeachersPage;
