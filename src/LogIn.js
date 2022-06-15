import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin= async ()=>{
        
        let result = await fetch("http://localhost:9800/login", {
        method: 'post',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    result = await result.json();
    console.log(result);

        if(result.name){

            localStorage.setItem('user',JSON.stringify(result));
            navigate("/")

        }else{
            alert("Please enter correct details");
        }
    }


    useEffect(()=>{

        const auth = localStorage.getItem('user')
        if(auth){
            navigate("/")
        }

    },[])


    return(
        <div className="login">
            <h1>Login</h1>

            <input type="text" placeholder="Enter your email..." className="inputBox" value={email} onChange={(e)=> setEmail(e.target.value)}/>

            <input type="password" placeholder="Enter your password..." className="inputBox" value={password} onChange={(e)=> setPassword(e.target.value)}/>

            <button onClick={handleLogin} className="appButton" type="button">Login</button>

        </div>
    )
}

export default LogIn;