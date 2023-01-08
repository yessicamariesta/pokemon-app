import React from 'react'
import pokemonOverlay from '../img/pokemon_logo_overlay.svg'

function SearchOverlay() {
  return (
    <div className='search-overlay'>
      <img src={pokemonOverlay} alt='' />
    </div>
  )
}

export default SearchOverlay
