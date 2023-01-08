import React from 'react'
import logo from '../img/logo_pokemon.png'
import plus from '../img/ic_plus.svg'
import switchIcon from '../img/ic_switch.svg'
import SearchOverlay from '../components/SearchOverlay'
import Footer from '../components/Footer'
import { useGlobalContext } from '../context'
import CompareModal from '../components/CompareModal'
import { Link } from 'react-router-dom'

function Compare() {
  const { showModal, showCompareModal, loading, finalPokemon } =
    useGlobalContext()

  const { pokemon1, pokemon2 } = finalPokemon

  return (
    <>
      <div className='compare-container'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <p>Choose</p>
        <p>Your Pokemon</p>

        <div className='compare-box-container'>
          <div className={`${pokemon1 ? 'final-pokemon' : 'compare-box'}`}>
            {pokemon1 ? (
              <>
                <p className='pokemon-title bold'>My Pokemon</p>
                <img
                  src={pokemon1?.sprites.front_default}
                  className='poke-pict'
                />

                <p className='small-text'>Name</p>
                <p className='pokemon-name'>{pokemon1?.name}</p>

                <button
                  className='orange-bg'
                  onClick={() => showCompareModal('pokemon1')}
                >
                  Choose Again
                </button>
              </>
            ) : (
              <>
                <img
                  className='plus'
                  src={plus}
                  alt=''
                  onClick={() => showCompareModal('pokemon1')}
                />
                <p className='pokemon-title'>My Pokemon</p>
              </>
            )}
          </div>

          <img src={switchIcon} alt='' />

          <div className={`${pokemon2 ? 'final-pokemon' : 'compare-box'}`}>
            {pokemon2 ? (
              <>
                <p className='pokemon-title bold'>My Pokemon</p>
                <img
                  src={pokemon2?.sprites.front_default}
                  className='poke-pict'
                />

                <p className='small-text'>Name</p>
                <p className='pokemon-name'>{pokemon2?.name}</p>

                <button
                  className='orange-bg'
                  onClick={() => showCompareModal('pokemon2')}
                >
                  Choose Again
                </button>
              </>
            ) : (
              <>
                <img
                  className='plus'
                  src={plus}
                  alt=''
                  onClick={() => showCompareModal('pokemon2')}
                />
                <p className='pokemon-title'>Other Pokemon</p>
              </>
            )}
          </div>
        </div>

        {pokemon1 && pokemon2 ? (
          <>
            <div className='compare-result'>
              <div className='compare-result-left'>
                <p>The</p>
                <p>Result</p>

                <div className='compare-result-left-poke'>
                  <div className='compare-result-poke'>
                    <img src={pokemon1.sprites.front_default} alt='' />
                    <p>Your Pokemon</p>
                  </div>

                  <img src={switchIcon} alt='' />

                  <div className='compare-result-poke'>
                    <img src={pokemon2.sprites.front_default} alt='' />
                    <p>Other Pokemon</p>
                  </div>
                </div>
              </div>

              <div className='compare-result-right'>
                <div className='compare-result-right-header'>
                  <p>{pokemon1.name} Base Stats</p>
                  <img src={switchIcon} alt='' />
                </div>

                <div className='modal-right-stats-detail'>
                  <p>HP</p>
                  <p>{pokemon1.stats[0].base_stat}</p>
                  {pokemon1.stats[0].base_stat > 50 ? (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[0].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[0].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[0].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[0].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}

                  <div className='compare-result-number'>
                    <p
                      className={`${
                        pokemon1.stats[0].base_stat -
                          pokemon2.stats[0].base_stat >
                        0
                          ? 'green'
                          : pokemon1.stats[0].base_stat -
                              pokemon2.stats[0].base_stat <
                            0
                          ? 'red'
                          : 'grey'
                      }`}
                    >
                      {pokemon1.stats[0].base_stat -
                        pokemon2.stats[0].base_stat}
                    </p>
                  </div>
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Attack</p>
                  <p>{pokemon1.stats[1].base_stat}</p>
                  {pokemon1.stats[1].base_stat > 50 ? (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[1].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[1].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[1].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[1].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                  <div className='compare-result-number'>
                    <p
                      className={`${
                        pokemon1.stats[1].base_stat -
                          pokemon2.stats[1].base_stat >
                        0
                          ? 'green'
                          : pokemon1.stats[1].base_stat -
                              pokemon2.stats[1].base_stat <
                            0
                          ? 'red'
                          : 'grey'
                      }`}
                    >
                      {pokemon1.stats[1].base_stat -
                        pokemon2.stats[1].base_stat}
                    </p>
                  </div>
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Defense</p>
                  <p>{pokemon1.stats[2].base_stat}</p>
                  {pokemon1.stats[2].base_stat > 50 ? (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[2].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[2].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[2].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[2].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                  <div className='compare-result-number'>
                    <p
                      className={`${
                        pokemon1.stats[2].base_stat -
                          pokemon2.stats[2].base_stat >
                        0
                          ? 'green'
                          : pokemon1.stats[2].base_stat -
                              pokemon2.stats[2].base_stat <
                            0
                          ? 'red'
                          : 'grey'
                      }`}
                    >
                      {pokemon1.stats[2].base_stat -
                        pokemon2.stats[2].base_stat}
                    </p>
                  </div>
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Sp. Attack</p>
                  <p>{pokemon1.stats[3].base_stat}</p>
                  {pokemon1.stats[3].base_stat > 50 ? (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[3].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[3].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[3].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[3].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                  <div className='compare-result-number'>
                    <p
                      className={`${
                        pokemon1.stats[3].base_stat -
                          pokemon2.stats[3].base_stat >
                        0
                          ? 'green'
                          : pokemon1.stats[3].base_stat -
                              pokemon2.stats[3].base_stat <
                            0
                          ? 'red'
                          : 'grey'
                      }`}
                    >
                      {pokemon1.stats[3].base_stat -
                        pokemon2.stats[3].base_stat}
                    </p>
                  </div>
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Sp. Deff</p>
                  <p>{pokemon1.stats[4].base_stat}</p>
                  {pokemon1.stats[4].base_stat > 50 ? (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[4].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[4].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[4].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[4].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                  <div className='compare-result-number'>
                    <p
                      className={`${
                        pokemon1.stats[4].base_stat -
                          pokemon2.stats[4].base_stat >
                        0
                          ? 'green'
                          : pokemon1.stats[4].base_stat -
                              pokemon2.stats[4].base_stat <
                            0
                          ? 'red'
                          : 'grey'
                      }`}
                    >
                      {pokemon1.stats[4].base_stat -
                        pokemon2.stats[4].base_stat}
                    </p>
                  </div>
                </div>

                <div className='modal-right-stats-detail'>
                  <p>Speed</p>
                  <p>{pokemon1.stats[5].base_stat}</p>
                  {pokemon1.stats[5].base_stat > 50 ? (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-green'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[5].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[5].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      className='w3-grey'
                      style={{
                        height: '6px',
                        borderRadius: '5px',
                      }}
                    >
                      <div
                        className='w3-red'
                        style={{
                          height: '6px',
                          width: `${
                            pokemon1.stats[5].base_stat >= 100
                              ? '100%'
                              : `${pokemon1.stats[5].base_stat}%`
                          }`,
                        }}
                      ></div>
                    </div>
                  )}
                  <div className='compare-result-number'>
                    <p
                      className={`${
                        pokemon1.stats[5].base_stat -
                          pokemon2.stats[5].base_stat >
                        0
                          ? 'green'
                          : pokemon1.stats[5].base_stat -
                              pokemon2.stats[5].base_stat <
                            0
                          ? 'red'
                          : 'grey'
                      }`}
                    >
                      {pokemon1.stats[5].base_stat -
                        pokemon2.stats[5].base_stat}
                    </p>
                  </div>
                </div>

                <p>
                  For your information: the right side value (
                  <span className='red'>red</span> /
                  <span className='green'>green</span>) is the difference
                  between your pokemon and other pokemon
                </p>
              </div>
            </div>

            <Footer className='compare-footer' />
          </>
        ) : (
          <Footer />
        )}
      </div>

      {showModal && <CompareModal />}

      <SearchOverlay />
    </>
  )
}

export default Compare
