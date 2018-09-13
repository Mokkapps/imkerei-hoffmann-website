import React from 'react'
import styled from 'styled-components'

const MapView = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0px;
`

export default () => {
  return (
    <MapView
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz7lFCAhFdUcR4GJ5RrF7uKY&key=${
        process.env.GOOGLE_MAPS_API_KEY
      }`}
      allowFullScreen
    />
  )
}
