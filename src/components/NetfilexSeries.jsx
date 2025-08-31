const NetflixSeries = () => {
    const title = "Netflix Series";
    const des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cupiditate, mollitia modi dolorum vero laborum quia suscipit cumque voluptatem distinctio error blanditiis autem tempore facilis, quibusdam adipisci. Iusto, sed possimus?";
    const rating = 8.12;
    let age = 18;

    const buttonChecker = () => {
        if(age >= 18) return "Watch";
        return "No Available";
    }

    return(
        <>
            <div>
                <img width="400" src="thumbnail.jpeg" alt="thumbnail.jpeg"  />
                <h1>Name: {title}</h1>
                <h4>Ratings: {rating}</h4>
                <p>Summary: {des} </p>
                <button>{buttonChecker()} </button>
              
            </div>
        </>
    )
}


export default NetflixSeries