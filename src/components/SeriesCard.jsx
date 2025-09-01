export const SeriesCard = ({data}) => {
    const {name,id,img_url,rating,description,cast,genre,watch_url} = data;
    return (
        <li>
            <img width="400" src={img_url} alt="thumbnail.jpeg"  />
            <h1 >Name: {name} </h1>
            <h4>Ratings: {rating} </h4>
            <p>Summary: {description} </p>
            <p>Cast: {cast} </p>
            <p>Gendre: {genre} </p>

            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
            </a>
        </li>
    )
}