import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import MostPopular from '../Popular/MostPopular'
import Download from '../HomeSection/Download/Download'
import Work from '../HomeSection/Work/Work'
import Gallery from '../HomeSection/Gallery/Gallery'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Work />
      <Gallery />
    </>
  )
}

export default Home
