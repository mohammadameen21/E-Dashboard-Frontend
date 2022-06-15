import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        console.log(name,email,password);
        let result = await fetch("http://localhost:9800/register",{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });

    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result)); // Giving data in local storage
    navigate('/');
}
    

    // if user is loged in then sign up link redirect to the '/' page on click 
    useEffect(()=>{
        
        const auth = localStorage.getItem('user');

        if(auth){
            navigate('/')
        }
    }, [])

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}
export default SignUp;