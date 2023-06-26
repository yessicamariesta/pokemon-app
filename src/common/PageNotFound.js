import React from 'react'
import './PageNotFound.css'
import pokemonOutline from '../images/ic_pokemon_logo_outline.png'

const PageNotFound = () => {
  return (
    <div className='error-container'>
      <img src={pokemonOutline} alt='pokemon' />
      <p>Not Found</p>
    </div>
  )
}

export default PageNotFound
