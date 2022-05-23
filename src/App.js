import List from './components/List/List'
import Grid from './components/Grid/Grid'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {API_CALLS} from './constants'

function App() {
  return (

    <div className="app">
      <Header />
      <div className='container'>
        <Grid type={API_CALLS.trendingMovies}/>
      </div>
      <Footer />
    </div>
  )
}

export default App;//Con esto reconoce el import y la rutA
