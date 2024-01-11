import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import styled from 'styled-components';
// import csvFile from '../data/testdata.csv';

const DataViewContainer = styled.div`
  max-height: 450px;
// height: 60%;
  overflow: auto;
  border: 1px solid #ccc;
  margin: 20px;
  border-radius: 10px;
  font-family: 'Raleway', sans-serif;
`;

const Table = styled.table`
  width: 100%;
//   border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 10px;

  th, td {
    // border: 1px solid #ddd;
    background-color: #fafafa;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    border:none;
  }
`;

const DataView = ({ datasetId }) => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
  
    useEffect(() => {
      // Fetch CSV content from the backend using the datasetId
      fetch(`http://localhost:8080/api/datasets/detail/${datasetId}`)
        .then(response => response.json())
        .then(dataset => {
          if (dataset && dataset.csvContent) {
            Papa.parse(dataset.csvContent, {
              header: true,
              complete: (result) => {
                setHeaders(result.meta.fields); // Set headers from parsed data
                setData(result.data); // Set data from parsed data
              }
            });
          }
        })
        .catch(error => console.error('Error:', error));
    }, [datasetId]);
  
    return (
      <DataViewContainer>
        <Table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </DataViewContainer>
    );
  };
  
  export default DataView;