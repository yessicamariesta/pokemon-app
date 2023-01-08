import React from 'react'
import logo from '../img/logo_pokemon.png'
import pokedex from '../img/ic_pokedex.svg'
import pokemonOverlay from '../img/pokemon_logo_overlay.svg'

function HomeHeader() {
  return (
    <div className='logo-container'>
      <img className='logo-overlay' src={pokemonOverlay} />
      <img className='logo' src={logo} alt='pokemon_logo' />

      <div className='welcome-container'>
        <p>Welcome to </p>
        <img src={pokedex} />
      </div>
    </div>
  )
}

export default HomeHeader
