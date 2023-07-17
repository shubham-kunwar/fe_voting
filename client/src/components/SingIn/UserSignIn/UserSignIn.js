import React, { useState } from 'react';
import { Button, Signup, Container, CheckboxContainer, CheckboxLabel, Form, TextField, Title, Link, LinkContainer } from "../SignIn.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserSignIn = ({ setShowSignUp }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    otp: '', // Add the otp field to the state
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, otp } = data; // Use otp instead of password here
    try {
      const signIn = await axios.post('/signin', {
        email,
        otp, // Use otp instead of password in the request
      });
      if (signIn.error) {
        toast.error(signIn.error);
      } else {
        console.log(signIn);
        toast.success('Signin Successful, Welcome');
        // Redirect to /dashboard when login is successful
        navigate('/dashboard'); // Use the navigate function to navigate to /dashboard
      }
    } catch (error) {
      toast.error('error');
      console.log(error);
    }
  };

  return (
    <Container>
    <Title>User Sign in</Title>
    <Form onSubmit={handleLogin}>
      <TextField
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={data.email || ''}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <TextField
        type="text" // Use 'text' type instead of 'password'
        name="otp" // Use 'otp' as the name
        placeholder="One-Time Password"
        required
        value={data.otp || ''}
        onChange={(e) => setData({ ...data, otp: e.target.value })} // Use 'otp' in the setData function
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

export default UserSignIn;
