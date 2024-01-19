import React, { useState } from "react";
import "./Auth.css";

//MUI
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//Bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Auth = () => {
  const [showVisibility, setShowVisibiity] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const visibilityToggle = () => {
    setShowVisibiity(!showVisibility);
  };

  const setInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const onInputUsername = (event) => {
    console.log(event.target.value);
  };

  const setInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const [invalidPassword, setInvalidPassword] = useState();
  const onInputPassword = (event) => {
    let inputPassword = event.target.value;
    console.log(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(inputPassword))

    if(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(inputPassword)){
      setInvalidPassword(false);
    }
    else{
      setInvalidPassword(true);
    }
  };

  const [registerBox, setRegisterBox] = useState(false);
  const checkBoxValue = (event) => {
    if(event.target.checked)
      setRegisterBox(true);
    else{
      setRegisterBox(false);
    }
  }

  const setInputEmail = (event) => {
    setUsername(event.target.value);
  };

  const onInputEmail = (event) => {
    console.log(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault()

  };

  return (
    <div className="auth-root">
      <Form className="auth-form" onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onInputUsername}
          onBlur={setInputUsername}
          required
        />
      </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-3">
        <Form.Control
          type={
            showVisibility ? "password" : "text"
          }
          placeholder="Password"
          name="password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          onChange={onInputPassword}
          onBlur={setInputPassword}
          required
        />
        <InputGroup.Text id="basic-addon1">
          <span onClick={visibilityToggle}>
            {
              showVisibility ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon>
            }
          </span>
        </InputGroup.Text>
      </InputGroup>
      {
        invalidPassword && <span className="warning">
        8 Letter or more, 1 Capital letter, 1 Small letter
      </span>
      }
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label={
          registerBox ? "Give Your Email For Varification." : "First Time?"
        }
        onClick={checkBoxValue}/>
      </Form.Group>
      {
        registerBox && <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email" 
        placeholder="Enter email"
        onChange={onInputEmail}
        onBlur={setInputEmail}
        required
         />
        <span className="warning">
        We will never disclose your E-mail. Maybe?
      </span>
      </Form.Group>
      }
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Auth;
