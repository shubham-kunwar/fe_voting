import React, { useState } from 'react';
import {
  Container,
  CardContainer,
  Card,
  Designation,
  Image,
  Name,
  VoteButton
} from './voteCss';
// Placeholder images from the public folder
import image1 from './images/image1.jpg';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.webp';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';


const Vote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Brown', 'Sarah Wilson', 'Robert Taylor'];
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const designation = 'College Treasurer';

  const handleVote = (name) => {
    // Logic to handle the vote for the given name
    alert(`Voted for ${name}`);
  };

  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? names.length - 1 : prevIndex - 1));
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === names.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <button onClick={handleScrollLeft}>&lt;</button>
      <CardContainer>
        <Card>
          <Designation>{designation}</Designation>
          <Image src={images[currentIndex]} alt={names[currentIndex]} />
          <Name>{names[currentIndex]}</Name>
          <VoteButton onClick={() => handleVote(names[currentIndex])}>Vote</VoteButton>
        </Card>
      </CardContainer>
      <button onClick={handleScrollRight}>&gt;</button>
    </Container>
  );
};

export default Vote;
