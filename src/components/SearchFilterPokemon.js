import React from 'react'
import { useGlobalContext } from '../context'
import logo from '../img/logo_pokemon.png'

function SearchFilterPokemon() {
  const { pokemonTypeData, selectFilterPokemons } = useGlobalContext()

  return (
    <div className='pokemon-list-container'>
      {pokemonTypeData.map((item) => {
        return (
          <div
            className='pokemon-container'
            key={item.id}
            onClick={() => selectFilterPokemons(item.id)}
          >
            <div className='pokemon-card-header orange-bg'>
              {item.types.length >= 2 ? (
                <p>
                  {item.types[0].type.name} . {item.types[1].type.name}
                </p>
              ) : (
                <p>{item.types[0].type.name}</p>
              )}
            </div>

            <img
              src={`${
                item.sprites.front_default === null
                  ? logo
                  : item.sprites.front_default
              }`}
              alt=''
            />
            <h4>{item.name}</h4>

            <div className='pokemon-body-profile'>
              <div className='pokemon-weight'>
                <p>Weight</p>
                <p>{item.weight / 10} kg</p>
              </div>
              <div className='pokemon-height'>
                <p>Height</p>
                <p>{item.height / 10} m</p>
              </div>
            </div>

            <div className='pokemon-ability-profile'>
              <p>Ability</p>
              {item.abilities.length >= 3 ? (
                <p>
                  {item.abilities[0].ability.name} .{' '}
                  {item.abilities[1].ability.name} .{' '}
                  {item.abilities[2].ability.name}
                </p>
              ) : item.abilities.length === 2 ? (
                <p>
                  {item.abilities[0].ability.name} .{' '}
                  {item.abilities[1].ability.name}
                </p>
              ) : (
                <p>{item.abilities[0].ability.name}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SearchFilterPokemon
