import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import SearchBar from './Components/SearchBar/Search'
import './App.scss'
import RecentlyAdded from './Components/RecentlyAdded/RecentlyAdded'
import TopCategories from './Components/TopCategories/TopCategories'
import BuyersFeedback from './Components/BuyersFeedback/BuyersFeedback'
import Subscribe from './Components/Subscribe/Subscribe'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <SearchBar />
      <RecentlyAdded />
      <TopCategories />
      <BuyersFeedback />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
