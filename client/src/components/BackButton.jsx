import React from 'react';
import backImage from '../assets/back.png'; 
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  position: absolute;
    top: 0;
    left: 0;
    margin: 15px;
    margin-top: 30px;
    cursor: pointer;
    z-index: 1;

`;

const Img = styled.img`
    height: 30px;
`;


const BackButton = ({onClick}) => {
  return (
    <Button>
      <Img src={backImage} alt="Back" onClick={onClick}/> 
    </Button>
  );
};

export default BackButton;