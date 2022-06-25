import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.primary};
  
  @media ${props => props.theme.media.tablet} {
    font-size: 28px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 24px;
  }
`

const Title = (props) => {
  return <StyledTitle {...props} />
}
export default Title;