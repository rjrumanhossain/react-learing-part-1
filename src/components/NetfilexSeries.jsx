import dataSeries from '../api/SeriesData.json'
import { SeriesCard } from './SeriesCard'


const NetflixSeries = () => {

    return(
        <ul>
            {dataSeries.map((curEle) =><SeriesCard key={curEle.id} data = {curEle} /> )}
        </ul>
    )
}


export default NetflixSeries