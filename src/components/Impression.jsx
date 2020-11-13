import React from 'react'
import Img from 'gatsby-image'

export default ({ image, text }) => (
  <div className="w-full lg:w-1/2 ml-2">
    {image ? (
      <Img className="rounded-lg" fluid={image.childImageSharp.sizes} />
    ) : null}
    <p className="p-4">{text}</p>
  </div>
)
