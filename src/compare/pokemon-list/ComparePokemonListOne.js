import React, { useEffect, useState } from 'react'
import './ComparePokemonList.css'
import { useGlobalContext } from '../../context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import checkboxDisabled from '../../images/ic_checkbox_disabled.svg'
import checkboxEnabled from '../../images/ic_checkbox_enabled.svg'
import PokemonDetailLoading from '../../common/PokemonDetailLoading'
import PageNotFound from '../../common/PageNotFound'

const ComparePokemonListOne = () => {
  const {
    compareModalOne,
    setCompareModalOne,
    pokemonOneData,
    setPokemonOneData,
    homeLoading,
    homeSearchValue,
    setHomeSearchValue,
    nextPageFunc,
    prevPageFunc,
    next,
    back,
    setSelectedPokemonOne,
    selectedPokemonTwo,
  } = useGlobalContext()

  const [temporaryPokemonOne, setTemporaryPokemonOne] = useState(null)

  const closeCompareModalOne = () => {
    setCompareModalOne(false)
  }

  const checkPokemon = (pokemon) => {
    if (pokemon?.name === temporaryPokemonOne?.name) {
      return true
    } else {
      return false
    }
  }

  const checkPokemonTwo = () => {
    const pokemonOne = pokemonOneData?.filter(
      (item) => item?.name !== selectedPokemonTwo?.name
    )

    setPokemonOneData(pokemonOne)
  }

  const selectTemporaryPokemonOne = (id) => {
    const specificPokemon = pokemonOneData.find((item) => item.name === id)
    setTemporaryPokemonOne(specificPokemon)
  }

  const selectPokemonOne = () => {
    setSelectedPokemonOne(temporaryPokemonOne)
    closeCompareModalOne()
  }

  useEffect(() => {
    checkPokemonTwo()
  }, [])

  return (
    <div className={`overlay ${compareModalOne && 'show'}`}>
      <div className='compare-pokemon-list-container'>
        <div className='compare-pokemon-header'>
          <p>List Pokemon</p>
          <p onClick={() => closeCompareModalOne()}>
            <AiOutlineCloseCircle />
          </p>
        </div>

        <div className='compare-pokemon-body'>
          <form className='search-form compare'>
            <input
              type='text'
              placeholder='ID/Pokemon Name'
              value={homeSearchValue}
              onChange={(e) => setHomeSearchValue(e.target.value)}
            />
            <button className='cancel-btn' type='submit'>
              {homeSearchValue ? (
                <AiOutlineCloseCircle
                  onClick={(e) => {
                    e.preventDefault()
                    setHomeSearchValue('')
                  }}
                />
              ) : (
                <BiSearchAlt />
              )}
            </button>
          </form>

          <div className='compare-pokemon-list-body'>
            {pokemonOneData?.map((item, index) => {
              const { name, sprites, types, species } = item

              return (
                <div
                  className='single-compare-container'
                  key={index}
                  onClick={() => selectTemporaryPokemonOne(name)}
                >
                  <div className='compare-left-container'>
                    <img
                      className='selected'
                      src={
                        checkPokemon(item) ? checkboxEnabled : checkboxDisabled
                      }
                      alt=''
                    />
                    <img
                      className='pokemonImg'
                      src={sprites.front_default}
                      alt=''
                    />
                    <div className='compare-info-container'>
                      <p>Name</p>
                      <p>{name}</p>
                    </div>
                  </div>

                  <div className='compare-right-container'>
                    <div className='compare-info-container'>
                      <p>Type</p>
                      {types?.map((item, index, arr) => {
                        if (index + 1 === arr.length) {
                          return <span key={index}>{item.type.name}</span>
                        } else {
                          return (
                            <span key={index}>
                              {item.type.name} <span>,</span>
                            </span>
                          )
                        }
                      })}
                    </div>

                    <div className='compare-info-container'>
                      <p>Species</p>
                      <p>{species.name}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {!pokemonOneData && homeSearchValue && <PageNotFound />}

            {homeLoading && <PokemonDetailLoading />}
          </div>

          <div className='compare-tools-container'>
            {homeSearchValue ? (
              ''
            ) : (
              <div className='top-tools-container'>
                {back ? (
                  <button onClick={() => prevPageFunc(back)}>Back</button>
                ) : (
                  ''
                )}

                {next ? (
                  <button onClick={() => nextPageFunc(next)}>Next</button>
                ) : (
                  ''
                )}
              </div>
            )}

            <button className='choose-btn' onClick={() => selectPokemonOne()}>
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparePokemonListOne
