import React from 'react'

const Button = ({ children, href }) => (
  <a
    className="text-main-text rounded-lg border-0 no-underline inline-block text-base leading-6 cursor-pointer py-4 px-4 bg-accent hover:shadow-md"
    href={href}
  >
    {children}
  </a>
)

export default Button;
