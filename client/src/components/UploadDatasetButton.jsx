import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.div`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;

`;

const PlusSign = styled.div`
  font-size: 50px;
`;

const Text = styled.div`
  font-size: 20px;
`;

const UploadDatasetButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("click");
    navigate("/upload");
  };

  return (
    <Button onClick={handleClick}>
        <PlusSign>+</PlusSign>
        <Text>Upload Dataset</Text>
    </Button>
  );
};

export default UploadDatasetButton;
