import React, { useContext } from 'react';
import "./Header.css";
import  logo from  "../../images/Logo.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {


    const {user,logOut}=useContext(AuthContext);
    
    const handleSignOut=()=>{
        logOut()
        .then(result=>{
            console.log("successfullt signout")
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (

 
        <nav className='header'>
            <img src={logo} alt="" />
            <div   >
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders  </Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            {user && <span className='ms-3   text-light'>Welcome {user.email}
            <button className='ms-3 btn btn-warning' onClick={handleSignOut}>Log Out</button>
            </span> }
            </div>
        </nav>
    );
};

export default Header;