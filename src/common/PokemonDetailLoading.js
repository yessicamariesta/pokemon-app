import React from 'react'
import './PokemonDetailLoading.css'
import spinner from '../images/ic_pokeball.png'

const PokemonDetailLoading = () => {
  return (
    <div className='pokemon-detail-loading-container'>
      <img src={spinner} alt='' />
    </div>
  )
}

export default PokemonDetailLoading
