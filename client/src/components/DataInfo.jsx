import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const DataInfoContainer = styled.div`
//   margin: 20px;
margin: 20px;
margin-top: 80px;
font-family: 'Raleway', sans-serif;
`;

const DataInfo = ({ datasetId }) => {
    const [dataset, setDataset] = useState(null);
  
    useEffect(() => {
      // Fetch dataset details based on datasetId
      fetch(`http://calm-scrubland-61926-8fd87bc56428.herokuapp.com/api/datasets/detail/${datasetId}`)
        .then(response => response.json())
        .then(data => setDataset(data))
        .catch(error => console.error('Error:', error));
    }, [datasetId]);
  
    if (!dataset) {
      return <p>Loading...</p>;
    }
  
    return (
      <DataInfoContainer>
        <h2>{dataset.title}</h2>
        <p>{dataset.description}</p>
      </DataInfoContainer>
    );
  };
  
  export default DataInfo;
