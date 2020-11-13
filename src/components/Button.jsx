import React from 'react'

const Button = ({ children, onClick }) => (
  <button
    onClick={() => onClick()}
    className="text-light-text rounded-lg border-0 no-underline inline-block text-base leading-6 cursor-pointer py-4 px-4 bg-accent hover:shadow-md uppercase"
  >
    {children}
  </button>
)

export default Button
