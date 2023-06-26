import React from 'react'
import { useGlobalContext } from '../../context'
import './PokemonCard.css'
import logo from '../../images/logo_pokemon.png'

const PokemonCard = ({ item }) => {
  const { types, sprites, name, weight, height, abilities } = item

  const { fetchPokemonCardDetail } = useGlobalContext()

  return (
    <div
      className='pokemon-card-container'
      onClick={() => fetchPokemonCardDetail(name)}
    >
      <div className='card-header'>
        {types?.map((item, index, arr) => {
          if (index + 1 === arr.length) {
            return <p key={index}>{item.type.name}</p>
          } else {
            return (
              <p key={index}>
                {item.type.name}
                <span>.</span>
              </p>
            )
          }
        })}
      </div>

      <img
        className='pokemon-img'
        src={`${sprites?.front_default ? sprites.front_default : logo}`}
        alt=''
      />

      <p className='title'>{name}</p>

      <div className='proportion-container'>
        <div className='weight-container'>
          <p className='small grey'>Weight</p>
          <p className='medium bold'>{weight / 10} kg</p>
        </div>

        <div className='height-container'>
          <p className='small grey'>Height</p>
          <p className='medium bold'>{height / 10} m</p>
        </div>
      </div>

      <div className='abilities-container'>
        <p className='small grey'>Ability</p>
        <div className='ability-detail'>
          {abilities?.map((item, index, arr) => {
            if (index + 1 === arr.length) {
              return (
                <p key={index} className='bold'>
                  {item.ability.name}
                </p>
              )
            } else {
              return (
                <p key={index} className='bold'>
                  {item.ability.name} <span>.</span>
                </p>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
