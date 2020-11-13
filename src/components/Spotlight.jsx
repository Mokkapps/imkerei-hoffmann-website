import React from 'react'
import Img from 'gatsby-image'

export default ({ image, text }) => (
  <div className="bg-primary-light w-70 ml-4 mt-4 p-4 rounded-lg shadow-md flex flex-col items-center">
    {image ? (
      <Img className="rounded-full mx-8" fixed={image.childImageSharp.fixed} />
    ) : null}
    <span className="mt-4 text-center font-bold">{text}</span>
  </div>
)
