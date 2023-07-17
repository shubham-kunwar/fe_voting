import React, { useState } from 'react';
import {Button,Input, Signup, Container, CheckboxContainer,CheckboxLabel,Form, TextField,Title,Link, LinkContainer} from "./SignUp.css"
import {toast} from "react-hot-toast"

import axios from 'axios'
const SignUp = ({ handleShowSignUp }) => {

  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    collegeID:'',
    dob:'',
  })

  const [file, setFile] = useState(null);
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    const {name,email,collegeID,password,dob}=data

    try{
      const {data}=await axios.post('/signup',{
        name,email,collegeID,password,dob
      })

      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Success. Come back when votin starts." )
      }
    }
    catch(error){
      toast.error("error")
    }




  };
  

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignUp}>
      <TextField
  type="text"
  name="name"
  placeholder="Full Name"
  required
  value={data.name}
  onChange={(e) => setData({ ...data, name: e.target.value })}
/>
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
<TextField
  type="text"
  name="collegeID"
  placeholder="College ID"
  required
  value={data.collegeID}
  onChange={(e) => setData({ ...data, collegeID: e.target.value })}
/>
<TextField
  type="date"
  name="dob"
  placeholder="Date of Birth"
  required
  value={data.dob}
  onChange={(e) => setData({ ...data, dob: e.target.value })}
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