import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './SearchPage.css'
import logo from '../../images/logo_pokemon.png'
import filterIcon from '../../images/ic_filter.svg'
import logoOverlay from '../../images/pokemon_logo_overlay.svg'
import PokemonCard from '../pokemon-card/PokemonCard'
import Footer from '../../common/Footer'
import PokemonLoading from '../../common/PokemonLoading'
import PokemonDetail from '../pokemon-detail/PokemonDetail'
import FilterBox from '../filter-box/FilterBox'
import PageNotFound from '../../common/PageNotFound'

const homeURL = 'https://pokeapi.co/api/v2/pokemon/'

const SearchPage = () => {
  const {
    homeLoading,
    homeSearchValue,
    setHomeSearchValue,
    homePokemonData,
    fetchHomePokemonURL,
    next,
    setNext,
    back,
    setBack,
    pokemonModalBox,
    selectedFilter,
    setSelectedFilter,
    pokemonType,
    nextPageFunc,
    prevPageFunc,
  } = useGlobalContext()

  const [filterBox, setFilterBox] = useState(false)

  const openFilterBox = () => {
    setFilterBox(true)
    const body = document.querySelector('body')
    body.classList.add('show-pokemon-detail')
  }

  const closeFilterPokemon = (url) => {
    fetchHomePokemonURL(url)
    setSelectedFilter(false)
  }

  if (homeLoading) {
    return <PokemonLoading />
  }

  return (
    <div className='search-page-container'>
      <div className='search-page-header'>
        <Link to='/'>
          <img className='logo' src={logo} alt='logo' />
        </Link>

        {homeSearchValue ? (
          ''
        ) : (
          <div className='tools-container'>
            <div
              className='single-tool filter purple-bg'
              onClick={openFilterBox}
            >
              <p>Filter</p>
              <img src={filterIcon} />
            </div>

            {back && (
              <div className='single-tool blue-bg'>
                <p onClick={() => prevPageFunc(back)}>Back</p>
              </div>
            )}

            {!selectedFilter && (
              <div className='single-tool green-bg'>
                <p onClick={() => nextPageFunc(next)}>Next</p>
              </div>
            )}

            {selectedFilter && (
              <div
                className='single-tool purple-bg close'
                onClick={() => closeFilterPokemon(homeURL)}
              >
                <p>
                  Type : <span className='pokemon-type'>{pokemonType}</span>
                </p>
                <p className='close-pokemon-type'>
                  <AiOutlineCloseCircle />
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <form className='search-form'>
        <input
          type='text'
          placeholder='ID/Pokemon Name'
          value={homeSearchValue}
          onChange={(e) => setHomeSearchValue(e.target.value)}
        />
        <button type='submit'>
          {homeSearchValue ? (
            <AiOutlineCloseCircle onClick={() => setHomeSearchValue('')} />
          ) : (
            <BiSearchAlt />
          )}
        </button>
      </form>

      <div className='pokemon-list-container'>
        {!homePokemonData && homeSearchValue && <PageNotFound />}

        {homePokemonData?.map((item, index) => {
          return <PokemonCard key={index} item={item} />
        })}
      </div>

      {pokemonModalBox && <PokemonDetail />}

      {filterBox && (
        <FilterBox filterBox={filterBox} setFilterBox={setFilterBox} />
      )}

      <img className='top-overlay search-page' src={logoOverlay} />

      <Footer />
    </div>
  )
}

export default SearchPage
