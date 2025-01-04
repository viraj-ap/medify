import React from 'react'
import Header from '../Components/Header'
import SpecialityMenu from '../Components/SpecialityMenu'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SpecialityMenu />
      </div>
      <div>
        <TopDoctors />
      </div>
      <div>
        <Banner/>
      </div>
    </div>
  )
}

export default Home
