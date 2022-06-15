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
        
           <ul className="nav-ul">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {/* if user loged in, show log out button and don't show signup */}
            {/* <li>{ auth ? <Link onClick={logout} to="/signup" >Logout</Link> : <Link to="/signup">Sign Up</Link>}</li>
            <li><Link to="/login">Login</Link></li> */}

            {
                auth ? <li><Link onClick={logout} to="/signup" >Logout</Link></li>:<>
                <li><Link to="/signup">Sign Up</Link>}</li>
                <li><Link to="/login">Login</Link></li>
                </>
            }

           </ul>

        </div>
    )
}

export default Nav;