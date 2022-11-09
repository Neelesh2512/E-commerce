
import React, { useState }  from 'react'

export const Contact= ()=> {

    var [name,setName]=useState();
    var [email,setEmail]=useState();
    var [phone,setPhone]=useState();
    var [message,setMessage]=useState();
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }
    const emailUpdate=(event)=>{ // Dealing with email field changes to update our state
        setEmail(event.target.value)
    }
    const phoneUpdate=(event)=>{ // Dealing with phone field changes to update our state
        setPhone(event.target.value)
    }
    const messageUpdate=(event)=>{ // Dealing with message field changes to update our state
        setMessage(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:5000/contact" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                email: email,
                phone: phone,
                message: message,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('Your message has been sent!');
        })
    }

    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input required onChange={nameUpdate}></input><br/>
                <label>Phone Number:</label>
                <input required onChange={phoneUpdate}></input><br/>
                <label>Email:</label>
                <input required onChange={emailUpdate}></input><br/>
                <label>Message:</label>
                <textarea required onChange={messageUpdate}></textarea><br/>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
    
}

export default Contact