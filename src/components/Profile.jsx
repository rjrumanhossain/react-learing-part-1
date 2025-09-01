const Profile = () => {
    return(
        <>
            <ProfileCard
                name="Ruman hossain"
                age = {25}
                gettings = {
                    <div>
                        <p>Depth:CSE In Software Developer</p>
                        <p>Std: kurigram polytechnic institute </p>
                    </div>
                }
            >


                <p>address: Bhurungamary, kurigram ,Bangladesh</p>
                <button>Contact </button>



            </ProfileCard>
        
        
        
        </>
    )
}


export default Profile

const ProfileCard =(props) => {
    const {name, age, gettings, children} = props;
    return (
        <>
           <h3>Name:  {name}</h3>
           <h5>Name:  {age}</h5>
           {gettings}
           {children}

        </>
    )
}