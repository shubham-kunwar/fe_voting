import React from 'react';
import {Button, Container, CheckboxContainer,CheckboxLabel,Form, TextField,Title,Link, LinkContainer} from "./SignUp.css"

const SignUp = ({ handleShowSignUp }) => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      name: data.get('name'),
      email: data.get('email'),
      collegeID: data.get('collegeID'),
      dob: data.get('dob'),
    });
  };


  

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignUp}>
        <TextField
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        
        <CheckboxContainer>

          <CheckboxLabel htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />Remember me</CheckboxLabel>
        </CheckboxContainer>
        <Button type="submit">Sign In</Button>
      </Form>
      <LinkContainer>
      <Link
              href="#"
              variant="body2"
              onClick={() => handleShowSignUp(false)}
            >
          Already have an account? Sign In
        </Link>
      </LinkContainer>
    </Container>
  );
};


export default SignUp;
