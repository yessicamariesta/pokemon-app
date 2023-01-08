import React, { useEffect } from 'react'
import checkEnabledPict from '../img/ic_checkbox_enabled.svg'
import checkDisabled from '../img/ic_checkbox_disabled.svg'
import { useGlobalContext } from '../context'

function CompareModalBody({ data, handleClick }) {
  const { chosenPokemon, setChosenPokemon, finalPokemon, pokemonOwner } =
    useGlobalContext()

  const checkPokemon = () => {
    if (data?.id === chosenPokemon?.id) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (finalPokemon.pokemon1) {
      if (pokemonOwner === 'pokemon1') {
        setChosenPokemon(finalPokemon.pokemon1)
      }
    }

    if (finalPokemon.pokemon2) {
      if (pokemonOwner === 'pokemon2') {
        setChosenPokemon(finalPokemon.pokemon2)
      }
    }
  }, [finalPokemon])

  return (
    <>
      <div className='search-body'>
        <div className='search-input'>
          <img
            src={checkPokemon() ? checkEnabledPict : checkDisabled}
            alt=''
            onClick={() => handleClick(data)}
          />
          <img src={data?.sprites.front_default} alt='' />
        </div>

        <div className='detail-container'>
          <p>Name</p>
          <p>{data?.name}</p>
        </div>

        <div className='detail-container'>
          <p>Type</p>

          {data?.types.length >= 2 ? (
            <p>
              {data?.types[0].type.name} , {data?.types[1].type.name}
            </p>
          ) : (
            <p>{data?.types[0].type.name}</p>
          )}
        </div>

        <div className='detail-container'>
          <p>Species</p>
          <p>{data?.species.name}</p>
        </div>
      </div>
    </>
  )
}

export default CompareModalBody
