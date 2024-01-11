import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DatasetItem from './DatasetItem';
import UploadDatasetButton from './UploadDatasetButton';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const DatasetList = () => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    fetch('http://calm-scrubland-61926-8fd87bc56428.herokuapp.com/api/datasets/list')
      .then(response => response.json())
      .then(data => setDatasets(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid>
      <UploadDatasetButton />
      {datasets.map((dataset, index) => (
        <DatasetItem 
          key={dataset.id} // Assuming each dataset has a unique 'id'
          id={dataset.id}
          name={dataset.title} // Adjust according to your data structure
          description={dataset.description}
        />
      ))}
    </Grid>
  );
};

export default DatasetList;
