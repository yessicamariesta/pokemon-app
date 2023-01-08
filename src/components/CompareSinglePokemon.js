import React from 'react'
import { useGlobalContext } from '../context'
import checkEnabledPict from '../img/ic_checkbox_enabled.svg'
import checkDisabled from '../img/ic_checkbox_disabled.svg'

function CompareSinglePokemon({ handleClick }) {
  const { singlePokemon, chosenPokemon } = useGlobalContext()

  const checkPokemon = () => {
    if (singlePokemon?.id === chosenPokemon?.id) {
      return true
    }
    return false
  }

  return (
    <div className='search-body'>
      <div className='search-input'>
        <img
          src={checkPokemon() ? checkEnabledPict : checkDisabled}
          alt=''
          onClick={() => handleClick(singlePokemon)}
        />
        <img src={singlePokemon.sprites.front_default} alt='' />
      </div>

      <div className='detail-container'>
        <p>Name</p>
        <p>{singlePokemon.name}</p>
      </div>

      <div className='detail-container'>
        <p>Type</p>

        {singlePokemon.types.length >= 2 ? (
          <p>
            {singlePokemon.types[0].type.name} ,{' '}
            {singlePokemon.types[1].type.name}
          </p>
        ) : (
          <p>{singlePokemon.types[0].type.name}</p>
        )}
      </div>

      <div className='detail-container'>
        <p>Species</p>
        <p>{singlePokemon.species.name}</p>
      </div>
    </div>
  )
}

export default CompareSinglePokemon
