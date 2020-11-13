import React from 'react'
import Link from 'gatsby-link'

export default ({ icon, text, to }) => {
  const Icon = icon
  return (
    <Link
      className="text-main-text no-underline border-b-0 p-4 flex flex-wrap items-center justify-center hover:bg-text-main hover:text-accent"
      activeClassName="active"
      to={to}
    >
      {Icon ? <Icon style={{ marginRight: '.5em' }} /> : null}
      {text}
    </Link>
  )
}
