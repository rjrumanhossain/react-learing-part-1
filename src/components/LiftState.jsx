import { useState } from "react"
import '../index.css'
import { FaAngleRight } from "react-icons/fa6";
export const LiftState = () => {
    const [userInput, setUserInput] = useState("");

    const [checker, setChecker] = useState(false);

    const HandleDataTogale =(e) => {
        setChecker(e)
        if(checker != true){
            if(confirm("are you sure!")){
                alert("Your are Enable auto money transfer")
            }
        }
        else{
            alert("Thanks for your Buying . Back to again ")
        }
       
    } 
    return (<>
    <h1>{checker != true ? "False":'True'} - <FaAngleRight/></h1>

        <label className="switch bgColor">
        <input type="checkbox" onChange={(e) => HandleDataTogale(e.target.checked)} />
        <span className="slider round"></span>
          
        </label>
        {/* <InputComponent userInput = {userInput} setUserInput = {setUserInput}/>
        <DisplayComponents userInput={userInput} /> */}
          
    </>)
}


const DisplayComponents = ({userInput}) => {
    return (<>
        <h2>Hi! My name is: {userInput} </h2>
    </>)
}



const InputComponent =  ({userInput, setUserInput}) => {
    return (<>
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter Your name" />
    </>)
}