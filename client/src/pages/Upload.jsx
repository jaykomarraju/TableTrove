import React from 'react'
import UploadDatasetForm from '../components/UploadDatasetForm'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom';

const Upload = () => {


    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(`/app`);
    }

  return (
    <div>
        <BackButton onClick={handleBackClick} />
        <UploadDatasetForm />
    </div>
  )
}

export default Upload