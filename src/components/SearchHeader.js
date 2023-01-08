import React from 'react'
import logo from '../img/logo_pokemon.png'
import filter from '../img/ic_filter.svg'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import SearchFilterModal from './SearchFilterModal'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function SearchHeader() {
  const {
    search,
    openFilterModal,
    showFilterModal,
    clearFilterPokemon,
    filterSelected,
    selectedFilterName,
    pokemons,
    fetchPokemon,
  } = useGlobalContext()

  return (
    <>
      <div className='search-header'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>

        <div className='search-menu-container'>
          {!search && (
            <div
              className='search-menu purple-bg'
              onClick={() => openFilterModal()}
            >
              <p>Filter</p>
              <img src={filter} alt='' />
            </div>
          )}

          {filterSelected && (
            <div
              className='search-menu purple-bg clear-filter'
              onClick={() => clearFilterPokemon()}
            >
              <p>Type : {selectedFilterName}</p>
              <AiOutlineCloseCircle />
            </div>
          )}

          {pokemons.previous && !filterSelected ? (
            <div
              className='search-menu blue-bg'
              onClick={() => fetchPokemon(pokemons.previous)}
            >
              <p>Back</p>
            </div>
          ) : (
            ''
          )}

          {pokemons.next && !filterSelected && !search ? (
            <div
              className='search-menu green-bg'
              onClick={() => fetchPokemon(pokemons.next)}
            >
              <p>Next</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      {showFilterModal && <SearchFilterModal />}
    </>
  )
}

export default SearchHeader
