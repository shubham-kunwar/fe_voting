import React, { useState } from 'react';
import {Button,Input, Signup, Container, CheckboxContainer,CheckboxLabel,Form, TextField,Title,Link, LinkContainer} from "./SignUp.css"

const SignUp = ({ handleShowSignUp }) => {
  const [file, setFile] = useState(null);
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };
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
          <TextField
          type="text"
          name="collegeID"
          placeholder="College ID"
          required
        />
        <TextField
          type="date"
          name="dob"
          placeholder="Date of Birth"
          required
        />
        <Input
          type="file"
          name="collegeIDFile"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileUpload}
        />
        

        <Button type="submit">Sign In</Button>
      </Form>
      <LinkContainer>
        <Link href="/admin">Admin Login</Link>
        <Signup href="#" onClick={() => handleShowSignUp(false)}>
          Already have an account? Sign In
        </Signup>
      </LinkContainer>
    </Container>
  );
};


export default SignUp;
