import React from 'react';
import { useParams } from 'react-router-dom';
import DataInfo from '../components/DataInfo';
import DataView from '../components/DataView';

const DataDetail = () => {
    const { id } = useParams(); // Get dataset ID from URL
  
    return (
      <div>
        <DataInfo datasetId={id} />
        <DataView datasetId={id} />
      </div>
    );
  };
  

export default DataDetail;
