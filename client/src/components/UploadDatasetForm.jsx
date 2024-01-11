import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 16px;
  border: 1.5px solid black;
  border-radius: 10px;
  width: 60%;
  font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 1296px) {
    width: 70%;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 16px;
  border: 1.5px solid black;
  border-radius: 10px;
  min-height: 100px;
  height: 30vh;
  width: 60%;
  font-family: "Raleway", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 1296px) {
    width: 70%;
  }
`;

const Title = styled.h2`
  margin-bottom: 50px;
`;

const UploadDatasetForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a CSV file.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !file) {
      alert("Please fill all the fields and select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    fetch("http://localhost:8080/api/datasets/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Dataset uploaded successfully");
        navigate("/app");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error uploading dataset");
      });
  };

  useEffect(() => {
    if (title && description && file) {
      console.log("Data ready to be sent:", { title, description, file });
    }
  }, [title, description, file]);

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Upload Dataset</Title>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input type="file" accept=".csv" onChange={handleFileChange} />
      <Button text="Upload Dataset" handleClick={handleSubmit} />
    </Form>
  );
};

export default UploadDatasetForm;
