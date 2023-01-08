import React from 'react'
import { useGlobalContext } from '../context'
import logo from '../img/logo_pokemon.png'
import loadingPokemon from '../img/ic_loading.png'

function SearchSinglePokemon() {
  const { singlePokemon, selectPokemons, loading } = useGlobalContext()

  return (
    <>
      {loading && (
        <div className='loading-container'>
          <div className='loading-overlay'>
            <img src={loadingPokemon} alt='' />
          </div>
        </div>
      )}
      <div
        className='single-pokemon-container'
        onClick={() => selectPokemons(singlePokemon.id)}
      >
        <div className='pokemon-container'>
          <div className='pokemon-card-header orange-bg'>
            {singlePokemon.types.length >= 2 ? (
              <p>
                {singlePokemon.types[0].type.name} .{' '}
                {singlePokemon.types[1].type.name}
              </p>
            ) : (
              <p>{singlePokemon.types[0].type.name}</p>
            )}
          </div>
          <img
            src={`${
              singlePokemon.sprites.front_default === null
                ? logo
                : singlePokemon.sprites.front_default
            }`}
            alt=''
          />
          <h4>{singlePokemon.name}</h4>
          <div className='pokemon-body-profile'>
            <div className='pokemon-weight'>
              <p>Weight</p>
              <p>{singlePokemon.weight / 10} kg</p>
            </div>
            <div className='pokemon-height'>
              <p>Height</p>
              <p>{singlePokemon.height / 10} m</p>
            </div>
          </div>
          <div className='pokemon-ability-profile'>
            <p>Ability</p>
            {singlePokemon.abilities.length >= 3 ? (
              <p>
                {singlePokemon.abilities[0].ability.name} .{' '}
                {singlePokemon.abilities[1].ability.name} .{' '}
                {singlePokemon.abilities[2].ability.name}
              </p>
            ) : singlePokemon.abilities.length === 2 ? (
              <p>
                {singlePokemon.abilities[0].ability.name} .{' '}
                {singlePokemon.abilities[1].ability.name}
              </p>
            ) : (
              <p>{singlePokemon.abilities[0].ability.name}</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchSinglePokemon
