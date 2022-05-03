import React from 'react'
import ImgCarousel from '../containers/ImgCarousel'
import AosText from '../containers/AosText'
import CarouselGroup from '../containers/CaruselGroup'
import HomeText from '../containers/HomeText'
import Contacts from '../containers/Сontacts'
import RibbonText from '../containers/ RibbonText'

const HomePage = () => {
  return (
    <div>
      <ImgCarousel/>
      <RibbonText/>
      <AosText/>
      <CarouselGroup/>
      <HomeText/>
      <Contacts/>
    </div>
  )
}

export default HomePage
