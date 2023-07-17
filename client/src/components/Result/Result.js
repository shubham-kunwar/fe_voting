import React, { useState } from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ResultTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  background-color: #ddd;
  padding: 8px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;


const ResultTable = styled.table`
  width: 100%;
`;

const TableHeading = styled.th`
  padding: 12px;
  background-color: #f9f9f9;
  text-align: center;
  font-size: 18px;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }

`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 12px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CandidateVote = styled.p`
  background-color: #1976d2;
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  display: inline-block;
`;

const Result = () => {
  const [designationIndex, setDesignationIndex] = useState(0);

  const resultData = [
    {
      designation: 'President',
      candidates: [
        { id: 1, name: 'Candidate 1', votes: 10 },
        { id: 2, name: 'Candidate 2', votes: 20 },
        { id: 3, name: 'Candidate 3', votes: 30 },
        { id: 4, name: 'Candidate 4', votes: 40 },
        { id: 5, name: 'Candidate 5', votes: 50 },
      ],
    },
    {
      designation: 'Vice President',
      candidates: [
        { id: 1, name: 'Candidate 6', votes: 60 },
        { id: 2, name: 'Candidate 7', votes: 70 },
        { id: 3, name: 'Candidate 8', votes: 80 },
        { id: 4, name: 'Candidate 9', votes: 90 },
        { id: 5, name: 'Candidate 1', votes: 100 },
      ],
    },
    // Add more designations with their candidates and votes here
  ];

  const handleLeftButtonClick = () => {
    setDesignationIndex((prevIndex) => (prevIndex === 0 ? resultData.length - 1 : prevIndex - 1));
  };

  const handleRightButtonClick = () => {
    setDesignationIndex((prevIndex) => (prevIndex === resultData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentResult = resultData[designationIndex];

  return (
    <ResultContainer>
      <ResultTitle>
        <button onClick={handleLeftButtonClick}>{'<'}</button>
        {currentResult.designation}
        <button onClick={handleRightButtonClick}>{'>'}</button>
      </ResultTitle>
      <ResultTable>
        <thead>
          <tr>
            <TableHeading>Candidate ID</TableHeading>
            <TableHeading>Candidate Name</TableHeading>
            <TableHeading>Votes</TableHeading>
          </tr>
        </thead>
        <tbody>
          {currentResult.candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell>{candidate.id}</TableCell>
              <TableCell>{candidate.name}</TableCell>
              <TableCell>
                <CandidateVote>{candidate.votes}</CandidateVote>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </ResultTable>
    </ResultContainer>
  );
};

export default Result;
