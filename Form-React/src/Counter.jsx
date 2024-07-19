import { useState,useEffect} from "react"
import './Counter.css';

 export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);
    let incCountx = ()=>{
        setCountx((incCountx) => incCountx +1);
    }
    let incCounty = ()=>{
        setCounty((incCounty) => incCounty +1);
    }
    useEffect(function name (){
        console.log("My name is Yash Mishra");
    },[countx]);
    return(
        <div className="main">
            <h3 className="h3">count = {countx}</h3>
            <button className="btn" onClick={incCountx}>+1</button>

            <h3 className="h3">count = {county}</h3>
            <button className="btn" onClick={incCounty}>+1</button>

        </div>
    )
 }