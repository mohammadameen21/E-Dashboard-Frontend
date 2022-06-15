import React from "react";
import {Navigate, Outlet} from 'react-router-dom' 
// These both are checking is user loged in then user can visit that page if user is not loged in then it should be reacted on signup/login page.


const PrivateComponent = () =>{
    const auth = localStorage.getItem('user');
    return auth ?<Outlet />:<Navigate to="signup" />
}

export default PrivateComponent;