import React from 'react'
import Img from 'gatsby-image'

export default ({ image, text }) => (
  <div className="bg-accent w-64 ml-4 mt-4 p-4 rounded-lg shadow-md flex flex-col items-center">
    {image ? (
      <Img className="rounded-full" fixed={image.childImageSharp.fixed} />
    ) : null}
    <span className="mt-4 text-center font-bold">{text}</span>
  </div>
)
