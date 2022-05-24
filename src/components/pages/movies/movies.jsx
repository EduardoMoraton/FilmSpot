import Grid from '../../Grid/Grid'
import {API_CALLS} from '../../../constants'

function movies() {

  return (

    <div className="app">
        <h1>TRENDING MOVIES</h1>
        <Grid type={API_CALLS.trendingMovies}></Grid>
    </div>
  )
}

export default movies;//Con esto reconoce el import y la rutA
