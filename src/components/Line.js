import React from 'react'
import styled from 'styled-components'

const StyledLine = styled.div `
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};  

  @media ${props => props.theme.media.tablet} {
    font-size: 20px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 16px;
  }
`

const Line = (props) => {
  return <StyledLine {...props} />
}
export default Line;
