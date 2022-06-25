import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Console from './components/Console'
import Flex from './components/Flex'
import Title from './components/Title'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;

  @media ${props => props.theme.media.tablet} {
    padding: 1rem;
  }
  @media ${props => props.theme.media.phone} {
    padding: 0.5rem;
  }
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={"green"}>Console cmd 2022.</Title>
      </Flex>
      <Flex direction="column" margin="50px 0 20px">
        <Console />
        <Button color="green" align="flex-end">Send</Button>
      </Flex>
    </AppWrapper>
  )
}
export default App;