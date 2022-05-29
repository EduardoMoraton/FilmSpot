import List from '../../List/List'
import {API_CALLS} from '../../../constants'
import Carousel from '../../Carousel/Carousel'

function home() {

  return (

    <div className="app">
        <Carousel></Carousel>
        <h1>Freatured Movies</h1>
        <List type={API_CALLS.trendingMovies}></List>
    </div>
  )
}

export default home;//Con esto reconoce el import y la rutA
