import React, { useContext, useState } from 'react';
import './SignUp.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { faChainSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {


  const [error,setError]=useState("")
  const {createUser}=useContext(AuthContext)


  const handleSignUp=event=>{
    event.preventDefault();
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    const confirm =form.confirm.value;
    console.log(email,password,confirm)

    setError("")
    // validation
    if(password !== confirm){
      setError("Your password did not match")
      return
    }
    else if(password.length < 6){
        setError("Password must be six charecter longer")
        return
    }

    createUser(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      form.reset()
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
    })
  }











    return (
        <Form onSubmit={handleSignUp} className='w-25 mx-auto form-container'>
          <p className=' title'>Sign Up</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='ps-2'>Email  </Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='ps-2'>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='ps-2'>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirm' placeholder="Password" />
      </Form.Group>
       
      <Button variant="primary" type="submit" className='btn-submit'>
        Sign Up
      </Button>
      <p className='text-center'>
        <small>Already have an account? <Link to="/login"> <button className='btn btn-link'> <small >Login</small></button></Link></small>
      </p>
      <p className='text-danger'>{error}</p>
    </Form>
    );
};

export default SignUp;