import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
  width: 100%;
  height: 60vh;
  background: black;
  resize: none;
  font-size: 24px;
  border: none;
  color: ${props => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }

  @media ${props => props.theme.media.tablet} {
    font-size: 20px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 16px;
  }
`

const Console = ({color, ...props}) => {
  const [lines, setLines] = useState(["C:/windows/system>"]);

  const onKeyPress = e => {
    if(e.charCode === 13) {
      setLines([...lines, "C:/windows/system>"])
    }
  }

  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map(line => 
          <Line key={line} color={color}>
            {line}
          </Line>
        )}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
    </Flex>
  )
}
export default Console;