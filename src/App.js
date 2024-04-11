import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import SearchBar from './Components/SearchBar/Search'
import './App.scss'
import RecentlyAdded from './Components/RecentlyAdded/RecentlyAdded'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <SearchBar />
      <RecentlyAdded />
    </div>
  )
}

export default App
