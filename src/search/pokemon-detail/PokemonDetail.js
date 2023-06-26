import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PokemonDetailLoading from '../../common/PokemonDetailLoading'
import './PokemonDetail.css'

const PokemonDetail = () => {
  const { pokemonDetailData, pokemonModalBox, setPokemonModalBox } =
    useGlobalContext()

  const { name, sprites, height, weight, types, stats, abilities } =
    pokemonDetailData

  const [abilityDetail, setAbilityDetail] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)

  const closePokemonModal = () => {
    const body = document.querySelector('body')
    setPokemonModalBox(false)
    body.classList.remove('show-pokemon-detail')
  }

  const fetchPokemonAbilityDetail = async (language) => {
    setDetailLoading(true)
    let temp = []
    try {
      for (let i = 0; i < abilities.length; i++) {
        const res = await fetch(abilities[i].ability.url)
        const data = await res.json()

        const langEng = data.effect_entries.filter(
          (item) => item.language.name === language
        )

        const ability = {
          ability: abilities[i].ability.name,
          eff: langEng[0].effect,
          shortEff: langEng[0].short_effect,
        }

        temp.push(ability)
      }
      setAbilityDetail(temp)
    } catch (error) {
      console.log(error)
    }
    setDetailLoading(false)
  }

  useEffect(() => {
    fetchPokemonAbilityDetail('en')
  }, [name])

  return (
    <div className={`overlay ${pokemonModalBox && 'show'}`}>
      <div className='pokemon-detail-container'>
        <div className='pokemon-detail-header'>
          <p>Detail Pokemon</p>
          <p onClick={closePokemonModal}>
            <AiOutlineCloseCircle />
          </p>
        </div>

        <div className='pokemon-detail-body'>
          {detailLoading && <PokemonDetailLoading />}
          <div className='pokemon-detail-top'>
            <div className='top-left-container'>
              <p>Pokemon Name</p>
              <p>{name}</p>
              <img src={sprites.front_default} alt={name} />
            </div>

            <div className='top-right-container'>
              <p>Base Stats</p>

              <div className='base-stats-container'>
                <p>HP</p>
                <p>{stats[0].base_stat}</p>
                <div
                  className='w3-light-grey'
                  style={{ height: '5px', borderRadius: '5px' }}
                >
                  <div
                    className={`${
                      stats[0].base_stat > 50 ? 'w3-green' : 'w3-red'
                    }`}
                    style={{
                      height: '5px',
                      borderRadius: '5px',
                      width: `${
                        stats[0].base_stat >= 100
                          ? '100%'
                          : `${stats[0].base_stat}%`
                      }`,
                    }}
                  ></div>
                </div>
              </div>

              <div className='base-stats-container'>
                <p>Attack</p>
                <p>{stats[1].base_stat}</p>
                <div
                  className='w3-light-grey'
                  style={{ height: '5px', borderRadius: '5px' }}
                >
                  <div
                    className={`${
                      stats[1].base_stat > 50 ? 'w3-green' : 'w3-red'
                    }`}
                    style={{
                      height: '5px',
                      borderRadius: '5px',
                      width: `${
                        stats[1].base_stat >= 100
                          ? '100%'
                          : `${stats[1].base_stat}%`
                      }`,
                    }}
                  ></div>
                </div>
              </div>

              <div className='base-stats-container'>
                <p>Defense</p>
                <p>{stats[2].base_stat}</p>
                <div
                  className='w3-light-grey'
                  style={{ height: '5px', borderRadius: '5px' }}
                >
                  <div
                    className={`${
                      stats[2].base_stat > 50 ? 'w3-green' : 'w3-red'
                    }`}
                    style={{
                      height: '5px',
                      borderRadius: '5px',
                      width: `${
                        stats[2].base_stat >= 100
                          ? '100%'
                          : `${stats[2].base_stat}%`
                      }`,
                    }}
                  ></div>
                </div>
              </div>

              <div className='base-stats-container'>
                <p>Sp. Attack</p>
                <p>{stats[3].base_stat}</p>
                <div
                  className='w3-light-grey'
                  style={{ height: '5px', borderRadius: '5px' }}
                >
                  <div
                    className={`${
                      stats[3].base_stat > 50 ? 'w3-green' : 'w3-red'
                    }`}
                    style={{
                      height: '5px',
                      borderRadius: '5px',
                      width: `${
                        stats[3].base_stat >= 100
                          ? '100%'
                          : `${stats[3].base_stat}%`
                      }`,
                    }}
                  ></div>
                </div>
              </div>

              <div className='base-stats-container'>
                <p>Sp. Deff</p>
                <p>{stats[4].base_stat}</p>
                <div
                  className='w3-light-grey'
                  style={{ height: '5px', borderRadius: '5px' }}
                >
                  <div
                    className={`${
                      stats[4].base_stat > 50 ? 'w3-green' : 'w3-red'
                    }`}
                    style={{
                      height: '5px',
                      borderRadius: '5px',
                      width: `${
                        stats[4].base_stat >= 100
                          ? '100%'
                          : `${stats[4].base_stat}%`
                      }`,
                    }}
                  ></div>
                </div>
              </div>

              <div className='base-stats-container'>
                <p>Speed</p>
                <p>{stats[5].base_stat}</p>
                <div
                  className='w3-light-grey'
                  style={{ height: '5px', borderRadius: '5px' }}
                >
                  <div
                    className={`${
                      stats[5].base_stat > 50 ? 'w3-green' : 'w3-red'
                    }`}
                    style={{
                      height: '5px',
                      borderRadius: '5px',
                      width: `${
                        stats[5].base_stat >= 100
                          ? '100%'
                          : `${stats[5].base_stat}%`
                      }`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className='pokemon-detail-bottom'>
            <div className='bottom-left-container'>
              <p>About</p>

              <div className='bottom-left-detail'>
                <p>Species</p>
                <p className='capital'>{name}</p>
              </div>

              <div className='bottom-left-detail'>
                <p>Height</p>
                <p>{height / 10} m</p>
              </div>

              <div className='bottom-left-detail'>
                <p>Weight</p>
                <p>{weight / 10} kg</p>
              </div>

              <div className='bottom-left-detail'>
                <p>Type</p>
                <div className='type-container'>
                  {types.map((item, index, arr) => {
                    if (index + 1 === arr.length) {
                      return (
                        <p key={index} className='capital'>
                          {item.type.name}
                        </p>
                      )
                    } else {
                      return (
                        <p key={index} className='capital'>
                          {item.type.name} <span>,</span>
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            </div>

            <div className='bottom-right-container'>
              <p>Abilities</p>

              {abilityDetail?.map((item, index) => {
                return (
                  <div className='bottom-right-detail' key={index}>
                    <p>{item.ability}</p>
                    <p>{item.eff}</p>
                    <p>
                      <span>Short effect :</span> {item.shortEff}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
