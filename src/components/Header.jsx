import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import HomeIcon from 'react-feather/dist/icons/home'
import ProductIcon from 'react-feather/dist/icons/shopping-bag'
import ImpressionIcon from 'react-feather/dist/icons/eye'
import ContactIcon from 'react-feather/dist/icons/send'

import logo from '../images/logo.png'
import MenuItem from './MenuItem'

const Container = styled.div`
  background: gold;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .active {
    background-color: black;
    color: gold;
    text-decoration: none;
  }
`

const LogoText = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.8em;
  font-weight: bold;

  @media (max-width: 370px) {
    font-size: 1.3rem;
  }

  &:hover {
    text-decoration: none;
    color: black;
  }
`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  border-radius: 100%;
  margin-bottom: 0px;
  margin-right: 1rem;
  margin-left: 1rem;
`

const Header = ({ siteTitle }) => (
  <Container>
    <LogoText to="/">
      <LogoContainer>
        <Logo src={logo} width="40" height="40" />
        {siteTitle}
      </LogoContainer>
    </LogoText>
    <Menu>
      <MenuItem to="/" text="Über uns" icon={HomeIcon} />
      <MenuItem to="/products" text="Produkte" icon={ProductIcon} />
      <MenuItem to="/impressions" text="Einblicke" icon={ImpressionIcon} />
      <MenuItem to="/contact" text="Kontakt" icon={ContactIcon} />
    </Menu>
  </Container>
)

export default Header
