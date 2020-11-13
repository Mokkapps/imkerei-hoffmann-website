import React from 'react'
import Link from 'gatsby-link'

export default ({ icon, text, to }) => {
  const Icon = icon
  return (
    <Link
      className="text-main-text p-4 border-b-4 border-primary flex flex-wrap items-center justify-center hover:border-primary-dark"
      activeStyle={{ borderColor: 'red' }}
      to={to}
    >
      {Icon ? <Icon className="mr-2" /> : null}
      {text}
    </Link>
  )
}
