import React from 'react'
import { useGlobalContext } from '../context'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import CompareModalBody from './CompareModalBody'
import pokemonLogoOutline from '../img/ic_pokemon_logo_outline.png'
import CompareSinglePokemon from './CompareSinglePokemon'

function CompareModal() {
  const {
    pokemons,
    setSearch,
    setSinglePokemon,
    search,
    fetchPokemon,
    closeModal,
    singlePokemon,
    loading,
    pokemonOwner,
    chosenPokemon,
    setChosenPokemon,
    setFinalPokemon,
    finalPokemon,
  } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const cancelSearch = () => {
    setSearch('')
    setSinglePokemon(null)
  }

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const handleClick = (data) => {
    setChosenPokemon(data)
  }

  const handleChosen = (id) => {
    if (pokemonOwner === 'pokemon1') {
      setFinalPokemon({ ...finalPokemon, pokemon1: chosenPokemon })
    } else {
      setFinalPokemon({ ...finalPokemon, pokemon2: chosenPokemon })
    }
    closeModal()
  }

  return (
    <>
      <div className='compare-modal-overlay'>
        <div className='compare-modal-container'>
          <div className='compare-modal-header'>
            <p>List Pokemon</p>
            <AiOutlineCloseCircle onClick={() => closeModal()} />
          </div>

          <form action='' className='search-form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='ID/Pokemon Name'
              value={search}
              onChange={handleChange}
            />
            <span
              className={search && 'search-close'}
              onClick={() => cancelSearch()}
            >
              {search ? <AiOutlineCloseCircle /> : <BiSearchAlt />}
            </span>
          </form>

          {loading ? (
            'loading ....'
          ) : singlePokemon && search ? (
            <CompareSinglePokemon handleClick={handleClick} />
          ) : !singlePokemon && search ? (
            <div className='no-pokemon-container'>
              <img src={pokemonLogoOutline} alt='' />
              <p>Not Found</p>
            </div>
          ) : (
            <div className='compare-modal-body'>
              <div className='compare-modal-body-search'>
                {pokemons.data.map((pokemon) => (
                  <CompareModalBody
                    key={pokemon.id}
                    data={pokemon}
                    handleClick={handleClick}
                  />
                ))}
              </div>
            </div>
          )}

          {!search && (
            <div className='compare-modal-button'>
              {pokemons.next && (
                <button
                  type='submit'
                  className='blue-bg'
                  onClick={() => fetchPokemon(pokemons.next)}
                >
                  next
                </button>
              )}

              {pokemons.previous && (
                <button
                  type='submit'
                  className='blue-bg'
                  onClick={() => fetchPokemon(pokemons.previous)}
                >
                  back
                </button>
              )}
            </div>
          )}

          <button
            className='green-bg'
            onClick={() => handleChosen(chosenPokemon?.id)}
          >
            Choose
          </button>
        </div>
      </div>
    </>
  )
}

export default CompareModal
