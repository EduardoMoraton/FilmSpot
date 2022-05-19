import List from './components/List/List'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {API_CALLS} from './constants'

function App() {
  return (

    <div className="app">
      <Header />
      <div className='container'>
        <List type={API_CALLS.trendingMovies}/>
        <List type={API_CALLS.trendingSeries}/>
      </div>
      <Footer />
    </div>
  )
}

export default App;//Con esto reconoce el import y la rutA
