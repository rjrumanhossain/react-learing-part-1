import dataSeries from '../api/SeriesData.json'
import { SeriesCard } from './SeriesCard'


const NetflixSeries = () => {

    return(
        <ul>
            {dataSeries.map((data) =><SeriesCard key={data.id} data = {data} /> )}
        </ul>
    )
}


export default NetflixSeries