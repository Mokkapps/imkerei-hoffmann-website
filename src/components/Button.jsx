import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  color: black;
  border-radius: 0.25rem;
  border-width: 0px;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  background-color: gold;

  &:hover {
    color: black;
    background-color: rgb(236, 177, 0);
    text-decoration: none;
    border-bottom: 0px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
`

export default ({ children, href }) => <Button href={href}>{children}</Button>
