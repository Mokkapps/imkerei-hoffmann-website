import React from 'react'

export default () => {
  return (
    <iframe
      className="w-full h-64 border-0"
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz7lFCAhFdUcR4GJ5RrF7uKY&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
      allowFullScreen
    />
  )
}
