import styled from "styled-components";
import 'tailwindcss'
export const SeriesCard = ({data}) => {
    const {name,id,img_url,rating,description,cast,genre,watch_url} = data;

    const ButtonWactch = styled.button({
        padding:'1rem',
        backgroundColor: 'yellow',
        border: "none"
    });
    return (
        <li>
            <img width="400" src={img_url} alt="thumbnail.jpeg"  />
            <h1 >Name: {name} </h1>
            <h4>Ratings: {rating} </h4>
            <p className="bg-red-500 text-white p-4">Summary: {description} </p>
            <p>Cast: {cast} </p>
            <p>Gendre: {genre.join(', ')} </p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <ButtonWactch>Watch Now</ButtonWactch>
            </a>
        </li>
    )
}