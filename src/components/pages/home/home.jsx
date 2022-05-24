import List from '../../List/List'
import {API_CALLS} from '../../../constants'

function home() {

  return (

    <div className="app">
        <h1>Home page</h1>
        <List type={API_CALLS.trendingMovies}></List>
    </div>
  )
}

export default home;//Con esto reconoce el import y la rutA
