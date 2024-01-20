import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Auth.css";

//MUI
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";
import EmailIcon from "@mui/icons-material/Email";

//Bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Auth = () => {
  const [showVisibility, setShowVisibility] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const visibilityToggle = () => {
    setShowVisibility(!showVisibility);
  };

  const setInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const setInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const [invalidPassword, setInvalidPassword] = useState();
  const onInputPassword = (event) => {
    let inputPassword = event.target.value;
    let checkMark = document.getElementById("check-icon-password");

    if (/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(inputPassword)) {
      setInvalidPassword(false);
      checkMark.style.color = "yellowgreen";
    } else {
      setInvalidPassword(true);
      checkMark.style.color = "crimson";
    }
  };

  const [registerBox, setRegisterBox] = useState(false);
  const checkBoxValue = (event) => {
    if (event.target.checked) setRegisterBox(true);
    else {
      setRegisterBox(false);
    }
  };

  const setInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const [invalidEmail, setInvalidEmail] = useState();
  const onInputEmail = (event) => {
    let inputEmail = event.target.value;
    let checkMark = document.getElementById("check-icon-email");

    if (/^\S+@\S+\.\S+$/.test(inputEmail)) {
      setInvalidEmail(false);
      checkMark.style.color = "yellowgreen";
    } else {
      setInvalidEmail(true);
      checkMark.style.color = "crimson";
    }
  };

  const [invalidMsg, setInvalidMsg] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    let setMsg = "";
    if (registerBox) {
      if (invalidPassword) {
        setMsg = "Invalid Password";
        setInvalidMsg(setMsg);
        return
      }
      else if(invalidEmail) {
        setMsg = "Invalid Email";
        setInvalidMsg(setMsg);
        return
      }
      else {
        setMsg = "";
        setInvalidMsg(setMsg);
        console.log(username, password, email);
        navigate("/");
        
      }
    }
    else {
      if (invalidPassword) {
        setMsg = "Invalid Password";
        setInvalidMsg(setMsg);
        return
      }
      console.log(username, password);
      navigate("/");
    }
  };

  return (
    <div className="auth-root">
      <Form className="auth-form" onSubmit={onFormSubmit}>
      { invalidMsg && <h3 style={{color: "crimson"}}>{invalidMsg}</h3> }
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
              onBlur={setInputUsername}
              required
              maxLength="12"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type={showVisibility ? "password" : "text"}
              placeholder="Password"
              name="password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={onInputPassword}
              onBlur={setInputPassword}
              required
            />
            <InputGroup.Text id="basic-addon1">
              <span onClick={visibilityToggle} className="visibility-span">
                {showVisibility ? (
                  <VisibilityIcon></VisibilityIcon>
                ) : (
                  <VisibilityOffIcon></VisibilityOffIcon>
                )}
              </span>
              {invalidPassword ? (
                <span id="check-icon-password">
                  <CheckIcon></CheckIcon>
                </span>
              ) : (
                <span id="check-icon-password">
                  <CheckIcon></CheckIcon>
                </span>
              )}
            </InputGroup.Text>
          </InputGroup>
          {invalidPassword && (
            <span className="warning">
              8 Letter or more, 1 Capital letter, 1 Small letter
            </span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label={
              registerBox ? "Give Your Email For Varification." : "First Time?"
            }
            onClick={checkBoxValue}
          />
        </Form.Group>
        {registerBox && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter E-mail"
                name="email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={onInputEmail}
                onBlur={setInputEmail}
                required
              />
              <InputGroup.Text id="basic-addon1">
                <span>
                  <EmailIcon></EmailIcon>
                </span>
                {invalidEmail ? (
                  <span id="check-icon-email">
                    <CheckIcon></CheckIcon>
                  </span>
                ) : (
                  <span id="check-icon-email">
                    <CheckIcon></CheckIcon>
                  </span>
                )}
              </InputGroup.Text>
            </InputGroup>
            <span className="warning">
              We will never disclose your E-mail. Maybe?
            </span>
          </Form.Group>
        )}
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
