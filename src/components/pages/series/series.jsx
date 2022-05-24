import Grid from '../../Grid/Grid'
import {API_CALLS} from '../../../constants'

function series() {

  return (

    <div className="app">
        <h1>TRENDING SERIES</h1>
        <Grid type={API_CALLS.trendingSeries}></Grid>
    </div>
  )
}

export default series;//Con esto reconoce el import y la rutA