import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Item = styled.div`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;

`;

const DatasetItem = ({ id, name, description }) => {
  const MAX_LENGTH = 100; // Adjust the character limit as needed
  const navigate = useNavigate();
  const shortDescription =
    description.length > MAX_LENGTH
      ? `${description.substring(0, MAX_LENGTH)}...`
      : description;

  const handleClick = () => {
    navigate(`/data/${id}`);
  };

  return (
    <Item onClick={handleClick}>
      <h3>{name}</h3>
      <p>{shortDescription}</p>
    </Item>
  );
};

export default DatasetItem;
