import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  border-bottom: 0px;
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  &:hover {
    text-decoration: none;
    background-color: black;
    border-bottom: 0px;
    color: gold;
  }
`

export default ({ icon, text, to }) => {
  const Icon = icon
  return (
    <StyledLink activeClassName="active" to={to}>
      {Icon ? <Icon style={{ marginRight: '.5em' }} /> : null}
      {text}
    </StyledLink>
  )
}
