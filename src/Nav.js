import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import './App.css'
import {Navigate, Outlet} from 'react-router-dom' 

// useNavigate resolve our link is'nt update problem, it direct to the page also update the link name, navigate detacted by 


const Nav= () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    
    return(
        <div>

            <img src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg" alt="logo" className='logo'/>

        
           { 
            

            auth ?

           <ul className="nav-ul">

            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup" >Logout({JSON.parse(auth).name})</Link></li>:

            </ul>

            :
            
            <ul className="nav-ul nav-left">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
                
            }

        </div>
    )
}

export default Nav;