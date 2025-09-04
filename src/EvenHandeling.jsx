import { useState } from "react";

const EvenHandeling = () => {



   const showModal = (data) => {
        alert("hey I am "+ data);
    }
   const onMouseHover = () => {
        alert("Welcome to hovering");
    }

    return(
        <>
            <WelcomeCard onClick = {() => showModal("Ruman") }
                onMouseEntry = {() => onMouseHover()}
            />
              <DriveState/>
        </>
    )
}


export default EvenHandeling;


const WelcomeCard = (props) => {
    const {onClick, onMouseEntry} = props;
    // const {heloTxt, changeButtonName} = useState("hello ");

    function dataShow() {
        console.log(onMouseEntry);
        console.log(onClick);
    }

    let [count, setCount] = useState(1);

    const handleCount= () => {
        if(count >= 4){
            alert("You can't more increase");
        }else{
         setCount(() => count+1 );
        }
       
    }

    return(
        <>
            <button onClick = {onClick} >Click Me</button>
            <button onMouseEnter={onMouseEntry} >Hover Me</button>
            <button onClick={dataShow} >Hover Me</button>
            <button onClick={handleCount}>{count}</button>
            <p> {count} </p>

            <ChiledComponent message = {count} />
           
        </>
    )
}

const ChiledComponent = (props) =>{
    const {message} = props;
    return (
        <>
            <h2>chiled Components - {message}</h2>
           
        </>
    )
}

const DriveState = () =>{

    const [users, setUser] =useState([
       { 
        'id' :1,
        'name': "ruman",
        'age' : 25,
        },
        { 
            'id' :2,
        'name': "mamun",
        'age' : 24,
        },
        { 
            'id' :3,
        'name': "miftha",
        'age' : 23,
        },
    ]);
    

    const totalUser = users.length;
    const avarageAget = users.reduce((acc, curEle) => acc + curEle.age, 0) / users.length;
    
    const ShowData = (id) =>{
        const user = users.find((u) => u.id === id);
        return <ShowModal key={id} name = {user}/>

    }
    return <>

    <ul>
        {users.map( (curEle, index) =>( 
            <li onClick={() => ShowData(curEle.id)} key={index}>{curEle.name} - {curEle.age}</li>
        ))}
    </ul>
    <p> Total User = {totalUser} </p>
    <p> Total User = {avarageAget} </p>

    </>
}


const ShowModal = (props) =>{

    alert(props.name);

    return <><p>hello world</p></>
}