import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  max-width: 15rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${props => props.albumPage && css`
    max-width: 20rem;

    @media screen and (max-width: 550px) {
      max-width: 100%;
    }
  `}
`

export const Image = ({src, alt, ...other}) => {
  return (
    <Wrapper {...other}>
      <img src={src} alt={alt} />
    </Wrapper>
  )
}