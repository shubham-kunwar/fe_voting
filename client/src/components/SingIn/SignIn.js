import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  TextField,
  Title,
  OptionBox,
  OptionButton,
} from './SignIn.css';
import UserSignIn from './UserSignIn/UserSignIn';
import AuthSignIn from './AuthoritySignIn/AuthoritySignIn';

const SignIn = ({ setShowSignUp }) => {
  const [selectedOption, setSelectedOption] = useState('user');



  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Title>Sign in</Title>
      <OptionBox>
        <OptionButton
          active={selectedOption === 'user'}
          onClick={() => handleOptionChange('user')}
        >
          User
        </OptionButton>
        <OptionButton
          active={selectedOption === 'authority'}
          onClick={() => handleOptionChange('authority')}
        >
          Authority
        </OptionButton>
      </OptionBox>
      
      {selectedOption === 'user' && <UserSignIn setShowSignUp={setShowSignUp} />}
      {selectedOption === 'authority' && <AuthSignIn setShowSignUp={setShowSignUp}/>}
    </Container>
  );
};

export default SignIn;
