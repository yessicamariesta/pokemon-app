import React, { useEffect, useState } from 'react'
import './ComparePokemonList.css'
import { useGlobalContext } from '../../context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import checkboxDisabled from '../../images/ic_checkbox_disabled.svg'
import checkboxEnabled from '../../images/ic_checkbox_enabled.svg'
import PokemonDetailLoading from '../../common/PokemonDetailLoading'
import PageNotFound from '../../common/PageNotFound'

const ComparePokemonListTwo = () => {
  const {
    compareModalTwo,
    setCompareModalTwo,
    pokemonTwoData,
    setPokemonTwoData,
    homeLoading,
    homeSearchValue,
    setHomeSearchValue,
    nextPageFunc,
    prevPageFunc,
    next,
    back,
    setSelectedPokemonTwo,
    selectedPokemonOne,
  } = useGlobalContext()

  const [temporaryPokemonTwo, setTemporaryPokemonTwo] = useState(null)

  const closeCompareModalTwo = () => {
    setCompareModalTwo(false)
  }

  const checkPokemon = (pokemon) => {
    if (pokemon?.name === temporaryPokemonTwo?.name) {
      return true
    } else {
      return false
    }
  }

  const checkPokemonOne = () => {
    const pokemonTwo = pokemonTwoData?.filter(
      (item) => item?.name !== selectedPokemonOne?.name
    )

    setPokemonTwoData(pokemonTwo)
  }

  const selectTemporaryPokemonTwo = (id) => {
    const specificPokemon = pokemonTwoData.find((item) => item.name === id)

    setTemporaryPokemonTwo(specificPokemon)
  }

  const selectPokemonTwo = () => {
    setSelectedPokemonTwo(temporaryPokemonTwo)
    closeCompareModalTwo()
  }

  useEffect(() => {
    checkPokemonOne()
  }, [])

  return (
    <div className={`overlay ${compareModalTwo && 'show'}`}>
      <div className='compare-pokemon-list-container'>
        <div className='compare-pokemon-header'>
          <p>List Pokemon</p>
          <p onClick={() => closeCompareModalTwo()}>
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
            {pokemonTwoData?.map((item, index) => {
              const { name, sprites, types, species } = item

              return (
                <div
                  className='single-compare-container'
                  key={index}
                  onClick={() => selectTemporaryPokemonTwo(name)}
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

            {!pokemonTwoData && homeSearchValue && <PageNotFound />}

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

            <button className='choose-btn' onClick={() => selectPokemonTwo()}>
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparePokemonListTwo
