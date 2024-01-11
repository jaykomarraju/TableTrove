import React from 'react';
import { useParams } from 'react-router-dom';
import DataInfo from '../components/DataInfo';
import DataView from '../components/DataView';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
padding: 20px;
`

const DataDetail = () => {
    const { id } = useParams(); // Get dataset ID from URL
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(`/app`);
    }
  
    return (
      <Container>
        <BackButton onClick={onClickBack}/>
        <DataInfo datasetId={id} />
        <DataView datasetId={id} />
      </Container>
    );
  };
  

export default DataDetail;
