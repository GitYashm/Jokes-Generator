import { useState,useEffect} from "react";

export default function Joke(){
    let [joke, setjoke] = useState({});
    let URL = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async ()=>{
        let response = await fetch(URL) // When Api Use Async is required
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setjoke({setup:jsonResponse.setup, 
                punchline:jsonResponse.punchline});
        }
    // for print joke in start
    // we can't directly create a async function so create call back and pass the function and last call it 
    useEffect(()=>{
       async function getNewJoke(){
            let response = await fetch(URL) // When Api Use Async is required
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setjoke({setup:jsonResponse.setup, 
                    punchline:jsonResponse.punchline});
            }
            getNewJoke();
    },[])
    // if we do not add [] then this will go to infinite loop and print joke with some time duartion
    return(
        <div>
            <h3>Hellow</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
            
        </div>
    );
}