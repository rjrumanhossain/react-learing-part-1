import dataSeries from '../api/SeriesData.json'


const NetflixSeries = () => {

    return(
        <ul>
            {dataSeries.map((data) =>{
                return(
                    <li key={data.id}>
                        <img width="400" src={data.img_url} alt="thumbnail.jpeg"  />
                        <h1 >Name: {data.name} </h1>
                        <h4>Ratings: {data.rating} </h4>
                        <p>Summary: {data.description} </p>
                        <p>Cast: {data.cast} </p>
                        <p>Gendre: {data.genre} </p>

                        <a href={data.watch_url} target="_blank" rel="noopener noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </li>
                )
            })}
            
        </ul>
    )
}


export default NetflixSeries