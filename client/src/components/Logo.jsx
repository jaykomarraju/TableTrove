import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 20px;
`

const LogoImg = styled.img`
    height: 60px;
`

const LogoText = styled.div`
    font-size: 30px;
    font-weight: 700;
    font-family: 'Tektur', sans-serif;
    padding-left: 25px;
`

const Logo = () => {
  return (
    <Container>
        <LogoImg src={logo} />
        <LogoText>Table Trove</LogoText>
    </Container>
  )
}

export default Logo