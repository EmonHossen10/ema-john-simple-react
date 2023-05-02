import React from 'react';
import './SignUp.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
    return (
        <Form className='w-25 mx-auto form-container'>
          <p className=' title'>Sign Up</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='ps-2'>Email  </Form.Label>
        <Form.Control type="email" name='eamil' placeholder="Enter email" />
         
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
        Login
      </Button>
    </Form>
    );
};

export default SignUp;