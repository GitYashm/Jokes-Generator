import { useState } from "react"
import './Form.css';
export default function Form(){
    let[fullName,setfullName] = useState("");
    let[username,setusername] = useState("");
    let[FormData,setFormData] = useState({
        fullName:"",
        username:"",
        Password:""
    });

    let handleForm=(event)=>{
        let field = event.target.name;
        let fill  = event.target.value;
        console.log(field);
        console.log(fill);
        setFormData(fill);
    }
    
    return(
        <div>
            <form className="form" action="">
                <label htmlFor="fullName">Name </label>
                <input className="Name" type="text" placeholder="Enter Full Name" value={FormData.fullName} name="fullName" onChange={handleForm}/>
                <br /> <br />
                <label htmlFor="Username">Username</label>
                <input className="username" type="text" placeholder="Username" value={FormData.username} name="username" onChange={handleForm}/>
                <br /><br />
                <label htmlFor="Password">Password</label>
                <input className="username" type="password" placeholder="Password" value={FormData.Password} name="Password" onChange={handleForm}/>
                <button className="btn">Submit</button>
                
            </form>
        </div>
    )
}