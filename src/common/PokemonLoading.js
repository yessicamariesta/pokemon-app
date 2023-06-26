import React from 'react'
import './PokemonLoading.css'
import loading from '../images/ic_loading.png'

const PokemonLoading = () => {
  return (
    <div className='pokemon-loading-container'>
      <img src={loading} alt='pokemon-loading' />
    </div>
  )
}

export default PokemonLoading
