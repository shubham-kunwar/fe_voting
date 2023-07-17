import React, { useState } from 'react';
import { Button, Signup, Container, CheckboxContainer, CheckboxLabel, Form, TextField, Title, Link, LinkContainer } from "../SignIn.css";
import authorities from './authorities.json';

const AuthoritySignIn = ({ setShowSignUp }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');
    const authority = authorities.find((authority) => authority.email === email);

    if (authority) {
      // Authority exists, perform login logic
      console.log({
        email: authority.email,
        password: formData.get('password'),
      });

      // Replace the window.location.href with actual redirect method
      window.location.href = `/dashboard/${authority.email}/${authority.name}`;
    } else {
      // Authority doesn't exist, show error message
      alert('Wrong authority email');
    }

    // Reset the state values
    setData({
      email: '',
      password: '',
    });
  };

  return (
    <Container>
      <Title>Authority Sign in</Title>
      <Form onSubmit={handleLogin}>
        <TextField
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <CheckboxContainer>
          <CheckboxLabel htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />Remember me
          </CheckboxLabel>
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

export default AuthoritySignIn;
