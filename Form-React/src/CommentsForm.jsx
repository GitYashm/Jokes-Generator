import { useState } from "react"

 export default function CommentForm(){
    let [formData,setformData]= useState({
        username:"",
        textarea:"",
        number:5,
    });
    let handleInputChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setformData((currdata)=>{
            return{...currdata,[name]:value}
        });
    };
    let handleFormDefault=(event)=>{
        console.log(formData);
        event.preventDefault();
        // For Refresh the Value means Empty the input
        setformData({
            username:"",
            textarea:"",
            number:5,
        });
    }
    return(
        <form onSubmit={handleFormDefault}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange} id="username"/>
            <br /><br /><br /><br />


            <label htmlFor="textarea">Remarks</label>
            <textarea name="textarea" id="textarea" cols="30" rows="10" value={formData.textarea} placeholder="Write Anything" onChange={handleInputChange} ></textarea>
            <br /><br /><br /><br />


            <label htmlFor="number">Rating</label>
            <input type="number" placeholder="Rating" min={1} max={10} name="number" value={formData.number} onChange={handleInputChange} id="number"/>
            <br /><br /><br /><br />
            <button>Submit</button>
        </form>
    )
 }