import React from 'react'
import DatasetList from '../components/DatasetList'
import Logo from '../components/Logo'
import styled from 'styled-components'

const Container = styled.div`
padding: 20px;
`


const AppHome = () => {
  return (
    <Container>
        <Logo />
        <DatasetList />
    </Container>
  )
}

export default AppHome