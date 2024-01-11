import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

const UploadDatasetButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("click");
    navigate("/upload");
  };

  return (
    <Button onClick={handleClick}>
      <p>Upload Dataset</p>
    </Button>
  );
};

export default UploadDatasetButton;
