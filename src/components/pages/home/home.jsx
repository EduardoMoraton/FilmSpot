import List from '../../List/List'
import {API_CALLS} from '../../../constants'
import Carousel from '../../Carousel/Carousel'

function home() {

  return (

    <div className="app">
        <Carousel className="animate__animated animate__backInRight animate__faster"></Carousel>
        <h1>Freatured Movies</h1>
        <List type={API_CALLS.trendingMovies}></List>
        <h1>Freatured Series</h1>
        <List type={API_CALLS.trendingSeries}> </List>
    </div>
  )
}

export default home;//Con esto reconoce el import y la rutA
