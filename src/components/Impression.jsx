import React from 'react'
import Img from 'gatsby-image'

export default ({ image, text }) => (
  <div className="ml-2 w-1/2 md:w-full">
    {image ? (
      <Img className="rounded-lg" fluid={image.childImageSharp.sizes} />
    ) : null}
    <p className="p-4">{text}</p>
  </div>
)
