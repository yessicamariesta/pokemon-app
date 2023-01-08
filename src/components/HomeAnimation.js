import React from 'react'
import snorlax from '../img/img_snorlax.png'
import ash from '../img/img_ash.png'
import pokedexOverlay from '../img/pokedex_overlay.svg'

function HomeAnimation() {
  return (
    <div className='animation-container'>
      <img src={snorlax} alt='' />
      <img src={pokedexOverlay} alt='' />
      <img src={ash} alt='' />
    </div>
  )
}

export default HomeAnimation
