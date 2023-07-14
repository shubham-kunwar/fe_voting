import React from 'react';
import {Button,Signup, Container, CheckboxContainer,CheckboxLabel,Form, TextField,Title,Link, LinkContainer} from "./SignIn.css"
import users from './users.json';

const SignIn = ({ setShowSignUp }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const email = data.get('email');
    const user = users.find((user) => user.email === email);
  
    if (user) {
      // User exists, perform login logic
      console.log({
        email: user.email,
        password: data.get('password'),
      });
  
      // Replace the window.location.href with actual redirect method
      window.location.href = `/dashboard/${user.email}/${user.name}`;
    } else {
      // User doesn't exist, show error message
      alert('Wrong user email');
    }
  };
  

  return (
    <Container>
      <Title>Sign in</Title>
      <Form onSubmit={handleLogin}>
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
        <Link href="/">Forgot password?</Link>
        <Signup href="#" onClick={() => setShowSignUp(true)}>
          Don't have an account? Sign Up
        </Signup>
      </LinkContainer>
    </Container>
  );
};


export default SignIn;
