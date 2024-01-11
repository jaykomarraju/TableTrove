import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import Button from '../components/Button'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`

const Home = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log('click')
        navigate('/app')
    }

  return (
    <Container>
        <Logo />
        <Button text="Enter App" onClick={handleClick} />
    </Container>
  )
}

export default Home