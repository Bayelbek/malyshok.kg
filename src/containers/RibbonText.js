import React from 'react'
import '../styles/NavbarTop.css'

const RibbonText = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 50}} data-aos="zoom-in">
      <div style={{width: 500}}>
        <div style={{textAlign: 'center'}}>
          <h2 className={'OurMission'}>НАША МИССИЯ</h2>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <hr style={{width: 200}}/>
          </div>
          <p className={'text-muted'}>Наша школа, действуя в духе лучших педагогических традиций, способствует максимальному развитию
            личности ученика, обеспечивает перспективы его жизненного успеха и открывает двери в
            университеты
            мира.</p>
        </div>
      </div>
    </div>
  )
}

export default RibbonText
