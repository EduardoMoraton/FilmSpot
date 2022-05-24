import React, {useEffect, useState} from 'react'
import Home from './components/pages/home/home'
import Movies from './components/pages/movies/movies'
import Series from './components/pages/series/series'
import Search from './components/pages/search/search'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {API_CALLS} from './constants'
import { computeHeadingLevel } from '@testing-library/react'

function App() {
  const [activeMenu, setActiveMenu] = useState()
  const childToParent = (childdata) =>
  {
    switch (childdata) {
      case "movies":
        setActiveMenu(<Movies></Movies>)
        break;
      case "tv":
        setActiveMenu(<Series></Series>)
        break;
      case "home":
        setActiveMenu(<Home/>)
        break;
      default:
        setActiveMenu(<Search query={childdata}></Search>)
        break;
    }
  }
  
  return (

    <div className="app">
      <Header childToParent={childToParent}/>
      <div className='container'>
        {activeMenu}
      </div>
      <Footer />
    </div>
  )
}

export default App;//Con esto reconoce el import y la rutA
