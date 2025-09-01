export const SeriesCard = (props) => {
    return (
        <li>
            <img width="400" src={props.data.img_url} alt="thumbnail.jpeg"  />
            <h1 >Name: {props.data.name} </h1>
            <h4>Ratings: {props.data.rating} </h4>
            <p>Summary: {props.data.description} </p>
            <p>Cast: {props.data.cast} </p>
            <p>Gendre: {props.data.genre} </p>

            <a href={props.data.watch_url} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
            </a>
        </li>
    )
}