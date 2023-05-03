import React, { useContext } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const {signIn}=useContext(AuthContext);
  // navigate
  const navigate=useNavigate()
  // Current Location
  const location =useLocation()
  console.log(location)



  const handleLogin=event=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

    signIn(email,password)
      .then(result=>{
        const loggedUser=result.user
        console.log(loggedUser)
        form.reset();
        // navigate 
        navigate('/')
      })
      .catch(error=>{
        console.log(error)
      })







  }















    return (
        <Form onSubmit={handleLogin} className='w-25 mx-auto form-container'>
          <p className=' title'>Login</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='ps-2'>Email  </Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='ps-2'>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password"required />
      </Form.Group>
       
      <Button variant="primary" type="submit" className='btn-submit'>
        Login
      </Button>
      <p className='text-center'>
        <small>New to Ema-john?<Link to="/signup"> <button className='btn btn-link'> <small > Create New Account </small></button></Link></small>
      </p>
    </Form>
    );
};

export default Login;