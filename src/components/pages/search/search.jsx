import Grid from '../../Grid/Grid'
import {API_CALLS} from '../../../constants'

function search({query}) {

  return (

    <div className="app">
        <h1>TRENDING MOVIES</h1>
        <Grid search={query} key={query}></Grid>
    </div>
  )
}

export default search;//Con esto reconoce el import y la rutA