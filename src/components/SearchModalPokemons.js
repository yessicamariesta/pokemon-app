import React from 'react'
import { useGlobalContext } from '../context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from '../img/logo_pokemon.png'

function SearchModalPokemons() {
  const { selectedPokemon, closeModal } = useGlobalContext()

  const [listAbilities, setListAbilities] = useState([])

  const { id, name, sprites, height, weight, types, stats, abilities } =
    selectedPokemon

  useEffect(() => {
    const fetchData = async () => {
      try {
        let temp = []
        for (let i = 0; i < abilities.length; i++) {
          const response = await fetch(`${abilities[i].ability.url}`)
          const data = await response.json()
          temp.push(data)
        }
        setListAbilities(temp)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className='modal-overlay'>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          <p>Detail Pokemon</p>
          <span onClick={() => closeModal()}>
            <AiOutlineCloseCircle />
          </span>
        </div>
        <div className='modal-container'>
          <div className='modal-body'>
            <div className='modal-left'>
              <div className='modal-left-header'>
                <p>Pokemon Name</p>
                <p>{name}</p>
                <img
                  src={`${
                    sprites.front_default === null
                      ? logo
                      : sprites.front_default
                  }`}
                  alt=''
                />
              </div>

              <div className='modal-right-stats-container'>
                <p>Base Stats</p>
                <div className='modal-right-stats-detail'>
                  <p>HP</p>
                  <p>{stats[0].base_stat}</p>
                  {stats[0].base_stat > 50 ? (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            stats[0].base_stat >= 100
                              ? '100%'
                              : `${stats[0].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            stats[0].base_stat >= 100
                              ? '100%'
                              : `${stats[0].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Attack</p>
                  <p>{stats[1].base_stat}</p>
                  {stats[1].base_stat > 50 ? (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            stats[1].base_stat >= 100
                              ? '100%'
                              : `${stats[1].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            stats[1].base_stat >= 100
                              ? '100%'
                              : `${stats[1].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Defense</p>
                  <p>{stats[2].base_stat}</p>
                  {stats[2].base_stat > 50 ? (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            stats[2].base_stat >= 100
                              ? '100%'
                              : `${stats[2].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            stats[2].base_stat >= 100
                              ? '100%'
                              : `${stats[2].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Sp. Attack</p>
                  <p>{stats[3].base_stat}</p>
                  {stats[3].base_stat > 50 ? (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            stats[3].base_stat >= 100
                              ? '100%'
                              : `${stats[3].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            stats[3].base_stat >= 100
                              ? '100%'
                              : `${stats[3].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Sp. Deff</p>
                  <p>{stats[4].base_stat}</p>
                  {stats[4].base_stat > 50 ? (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            stats[4].base_stat >= 100
                              ? '100%'
                              : `${stats[4].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            stats[4].base_stat >= 100
                              ? '100%'
                              : `${stats[4].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Speed</p>
                  <p>{stats[5].base_stat}</p>
                  {stats[5].base_stat > 50 ? (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            stats[5].base_stat >= 100
                              ? '100%'
                              : `${stats[5].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-light-grey'
                      style={{
                        height: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            stats[5].base_stat >= 100
                              ? '100%'
                              : `${stats[5].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='modal-right'>
              <div className='modal-left-body'>
                <p>About</p>

                <div className='modal-left-body-detail'>
                  <div className='modal-left-category'>
                    <p>Species</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Type</p>
                  </div>

                  <div className='modal-left-detail'>
                    <p>{name}</p>
                    <p>{height / 10} m</p>
                    <p>{weight / 10} kg</p>
                    {types.length >= 2 ? (
                      <p>
                        {types[0].type.name}, {types[1].type.name}
                      </p>
                    ) : (
                      <p>{types[0].type.name}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className='modal-right-abilities-container'>
                <p>Abilities</p>
                {listAbilities.length
                  ? listAbilities.map((item, idx) => (
                      <div key={idx} className='ability-container'>
                        <p>{item.name}</p>
                        <p>{item.effect_entries[0]?.effect}</p>
                        <p>
                          <span>Short effect : </span>
                          <span>{item.effect_entries[0]?.short_effect}</span>
                        </p>
                      </div>
                    ))
                  : '-'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModalPokemons
