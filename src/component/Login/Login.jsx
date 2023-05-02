import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form className='w-25 mx-auto form-container'>
          <p className=' title'>Login</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='ps-2'>Email  </Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='ps-2'>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
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