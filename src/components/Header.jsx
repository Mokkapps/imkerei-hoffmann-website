import React from 'react'
import Link from 'gatsby-link'

import HomeIcon from 'react-feather/dist/icons/home'
import ProductIcon from 'react-feather/dist/icons/shopping-bag'
import ImpressionIcon from 'react-feather/dist/icons/eye'
import ContactIcon from 'react-feather/dist/icons/send'

import logo from '../images/logo.png'
import MenuItem from './MenuItem'

const Header = ({ siteTitle }) => (
  <div className="bg-primary shadow-md flex flex-wrap items-center justify-between">
    <Link to="/" className="text-main-text text-3xl font-bold border-b-0">
      <div className="flex items-center">
        <img
          className="rounded-full mb-0 mx-4"
          alt="Logo"
          src={logo}
          width="40"
          height="40"
        />
        {siteTitle}
      </div>
    </Link>
    <div className="flex flex-wrap justify-evenly">
      <MenuItem to="/" text="Über uns" icon={HomeIcon} />
      <MenuItem to="/produkte" text="Produkte" icon={ProductIcon} />
      <MenuItem to="/einblicke" text="Einblicke" icon={ImpressionIcon} />
      <MenuItem to="/kontakt" text="Kontakt" icon={ContactIcon} />
    </div>
  </div>
)

export default Header
