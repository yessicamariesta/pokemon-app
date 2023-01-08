import React from 'react'
import pokemonLogoOutline from '../img/ic_pokemon_logo_outline.png'
import { useGlobalContext } from '../context'
import SearchHeader from '../components/SearchHeader'
import SearchForm from '../components/SearchForm'
import SearchPokemonList from '../components/SearchPokemonList'
import SearchSinglePokemon from '../components/SearchSinglePokemon'
import SearchFooter from '../components/SearchFooter'
import SearchOverlay from '../components/SearchOverlay'
import SearchModalPokemons from '../components/SearchModalPokemons'
import loadingPokemon from '../img/ic_loading.png'
import SearchFilterPokemon from '../components/SearchFilterPokemon'

function Search() {
  const { loading, search, singlePokemon, showModal, filterSelected, error } =
    useGlobalContext()

  return (
    <>
      <div className='search-container'>
        {loading && (
          <div className='loading-container'>
            <div className='loading-overlay'>
              <img src={loadingPokemon} alt='' />
            </div>
          </div>
        )}
        <SearchHeader />
        <SearchForm />
        {!search && !filterSelected ? <SearchPokemonList /> : ''}
        {singlePokemon && <SearchSinglePokemon />}
        {!singlePokemon && search ? (
          <div className='no-pokemon-container'>
            <img src={pokemonLogoOutline} alt='' />
            <p>Not Found</p>
          </div>
        ) : (
          ''
        )}
        <SearchFooter />
        {showModal && <SearchModalPokemons />}
        {filterSelected ? <SearchFilterPokemon /> : ''}
      </div>

      <SearchOverlay />
    </>
  )
}

export default Search
