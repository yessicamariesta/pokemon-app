import React from 'react'
import logo from '../../images/logo_pokemon.png'
import switchImg from '../../images/ic_switch.svg'
import plusImg from '../../images/ic_plus.svg'
import './ComparePage.css'
import ComparePokemonListOne from '../pokemon-list/ComparePokemonListOne'
import { useGlobalContext } from '../../context'
import ComparePokemonListTwo from '../pokemon-list/ComparePokemonListTwo'
import logoOverlay from '../../images/pokemon_logo_overlay.svg'
import { Link } from 'react-router-dom'

const ComparePage = () => {
  const {
    compareModalOne,
    compareModalTwo,
    setCompareModalOne,
    setCompareModalTwo,
    selectedPokemonOne,
    selectedPokemonTwo,
  } = useGlobalContext()

  const openCompareModalOne = () => {
    setCompareModalOne(true)
  }

  const openCompareModalTwo = () => {
    setCompareModalTwo(true)
  }

  return (
    <div className='compare-page-container'>
      <Link to='/'>
        <img className='logo' src={logo} alt='pokemon' />
      </Link>

      <div className='title-container'>
        <p>Choose</p>
        <p>Your Pokemon</p>
      </div>

      <div className='compare-wrapper'>
        {selectedPokemonOne ? (
          <div className='compare-selected-pokemon-container'>
            <p className='light-grey-font'>My Pokemon</p>
            <img src={selectedPokemonOne.sprites.front_default} alt='' />
            <div className='compare-name-container'>
              <p className='light-grey-font'>Name</p>
              <p>{selectedPokemonOne.name}</p>
            </div>
            <button className='orange-bg' onClick={() => openCompareModalOne()}>
              Choose Again
            </button>
          </div>
        ) : (
          <div
            className='compare-pokemon-container'
            onClick={() => openCompareModalOne()}
          >
            <img src={plusImg} alt='' />
            <p>My Pokemon</p>
          </div>
        )}

        <img src={switchImg} alt='' />

        {selectedPokemonTwo ? (
          <div className='compare-selected-pokemon-container'>
            <p className='light-grey-font'>Other Pokemon</p>
            <img src={selectedPokemonTwo.sprites.front_default} alt='' />
            <div className='compare-name-container'>
              <p className='light-grey-font'>Name</p>
              <p>{selectedPokemonTwo.name}</p>
            </div>
            <button className='orange-bg' onClick={() => openCompareModalTwo()}>
              Choose Again
            </button>
          </div>
        ) : (
          <div
            className='compare-pokemon-container'
            onClick={() => openCompareModalTwo()}
          >
            <img src={plusImg} alt='' />
            <p>Other Pokemon</p>
          </div>
        )}
      </div>

      {selectedPokemonOne && selectedPokemonTwo && (
        <div className='compare-result-container'>
          <div className='compare-result-left'>
            <p>The</p>
            <p>Result</p>

            <div className='compare-result-image'>
              <div className='single-compare-result-image'>
                <img src={selectedPokemonOne.sprites.front_default} alt='' />
                <p>Your Pokemon</p>
              </div>

              <img src={switchImg} alt='' />

              <div className='single-compare-result-image'>
                <img src={selectedPokemonTwo.sprites.front_default} alt='' />
                <p>Other Pokemon</p>
              </div>
            </div>
          </div>

          <div className='compare-result-right'>
            <div className='compare-result-right-header'>
              <p>{selectedPokemonOne.name} Base Stats</p>
              <img src={switchImg} alt='' />
            </div>

            <div className='base-stats-container'>
              <p>HP</p>
              <p>{selectedPokemonOne.stats[0].base_stat}</p>
              <div
                className='w3-light-grey'
                style={{
                  height: '5px',
                  borderRadius: '5px',
                }}
              >
                <div
                  className={`${
                    selectedPokemonOne.stats[0].base_stat > 50
                      ? 'w3-green'
                      : 'w3-red'
                  }`}
                  style={{
                    height: '5px',
                    borderRadius: '5px',
                    width: `${
                      selectedPokemonOne.stats[0].base_stat >= 100
                        ? '100%'
                        : `${selectedPokemonOne.stats[0].base_stat}%`
                    }`,
                  }}
                ></div>
              </div>
              <p
                className={`${
                  selectedPokemonOne.stats[0].base_stat -
                    selectedPokemonTwo.stats[0].base_stat >
                  0
                    ? 'green-font'
                    : `${
                        selectedPokemonOne.stats[0].base_stat -
                          selectedPokemonTwo.stats[0].base_stat ==
                        0
                          ? 'grey-font'
                          : 'red-font'
                      }`
                }`}
              >
                <span>{`${
                  selectedPokemonOne.stats[0].base_stat -
                    selectedPokemonTwo.stats[0].base_stat >
                  0
                    ? '+'
                    : ''
                }`}</span>
                {selectedPokemonOne.stats[0].base_stat -
                  selectedPokemonTwo.stats[0].base_stat}
              </p>
            </div>

            <div className='base-stats-container'>
              <p>Attack</p>
              <p>{selectedPokemonOne.stats[1].base_stat}</p>
              <div
                className='w3-light-grey'
                style={{ height: '5px', borderRadius: '5px' }}
              >
                <div
                  className={`${
                    selectedPokemonOne.stats[1].base_stat > 50
                      ? 'w3-green'
                      : 'w3-red'
                  }`}
                  style={{
                    height: '5px',
                    borderRadius: '5px',
                    width: `${
                      selectedPokemonOne.stats[1].base_stat >= 100
                        ? '100%'
                        : `${selectedPokemonOne.stats[1].base_stat}%`
                    }`,
                  }}
                ></div>
              </div>
              <p
                className={`${
                  selectedPokemonOne.stats[1].base_stat -
                    selectedPokemonTwo.stats[1].base_stat >
                  0
                    ? 'green-font'
                    : `${
                        selectedPokemonOne.stats[1].base_stat -
                          selectedPokemonTwo.stats[1].base_stat ==
                        0
                          ? 'grey-font'
                          : 'red-font'
                      }`
                }`}
              >
                <span>{`${
                  selectedPokemonOne.stats[1].base_stat -
                    selectedPokemonTwo.stats[1].base_stat >
                  0
                    ? '+'
                    : ''
                }`}</span>
                {selectedPokemonOne.stats[1].base_stat -
                  selectedPokemonTwo.stats[1].base_stat}
              </p>
            </div>

            <div className='base-stats-container'>
              <p>Deffense</p>
              <p>{selectedPokemonOne.stats[2].base_stat}</p>
              <div
                className='w3-light-grey'
                style={{ height: '5px', borderRadius: '5px' }}
              >
                <div
                  className={`${
                    selectedPokemonOne.stats[2].base_stat > 50
                      ? 'w3-green'
                      : 'w3-red'
                  }`}
                  style={{
                    height: '5px',
                    borderRadius: '5px',
                    width: `${
                      selectedPokemonOne.stats[2].base_stat >= 100
                        ? '100%'
                        : `${selectedPokemonOne.stats[2].base_stat}%`
                    }`,
                  }}
                ></div>
              </div>
              <p
                className={`${
                  selectedPokemonOne.stats[2].base_stat -
                    selectedPokemonTwo.stats[2].base_stat >
                  0
                    ? 'green-font'
                    : `${
                        selectedPokemonOne.stats[2].base_stat -
                          selectedPokemonTwo.stats[2].base_stat ==
                        0
                          ? 'grey-font'
                          : 'red-font'
                      }`
                }`}
              >
                <span>{`${
                  selectedPokemonOne.stats[2].base_stat -
                    selectedPokemonTwo.stats[2].base_stat >
                  0
                    ? '+'
                    : ''
                }`}</span>
                {selectedPokemonOne.stats[2].base_stat -
                  selectedPokemonTwo.stats[2].base_stat}
              </p>
            </div>

            <div className='base-stats-container'>
              <p>Sp. Attack</p>
              <p>{selectedPokemonOne.stats[3].base_stat}</p>
              <div
                className='w3-light-grey'
                style={{ height: '5px', borderRadius: '5px' }}
              >
                <div
                  className={`${
                    selectedPokemonOne.stats[3].base_stat > 50
                      ? 'w3-green'
                      : 'w3-red'
                  }`}
                  style={{
                    height: '5px',
                    borderRadius: '5px',
                    width: `${
                      selectedPokemonOne.stats[3].base_stat >= 100
                        ? '100%'
                        : `${selectedPokemonOne.stats[3].base_stat}%`
                    }`,
                  }}
                ></div>
              </div>
              <p
                className={`${
                  selectedPokemonOne.stats[3].base_stat -
                    selectedPokemonTwo.stats[3].base_stat >
                  0
                    ? 'green-font'
                    : `${
                        selectedPokemonOne.stats[3].base_stat -
                          selectedPokemonTwo.stats[3].base_stat ==
                        0
                          ? 'grey-font'
                          : 'red-font'
                      }`
                }`}
              >
                <span>{`${
                  selectedPokemonOne.stats[3].base_stat -
                    selectedPokemonTwo.stats[3].base_stat >
                  0
                    ? '+'
                    : ''
                }`}</span>
                {selectedPokemonOne.stats[3].base_stat -
                  selectedPokemonTwo.stats[3].base_stat}
              </p>
            </div>

            <div className='base-stats-container'>
              <p>Sp. Deff</p>
              <p>{selectedPokemonOne.stats[4].base_stat}</p>
              <div
                className='w3-light-grey'
                style={{ height: '5px', borderRadius: '5px' }}
              >
                <div
                  className={`${
                    selectedPokemonOne.stats[4].base_stat > 50
                      ? 'w3-green'
                      : 'w3-red'
                  }`}
                  style={{
                    height: '5px',
                    borderRadius: '5px',
                    width: `${
                      selectedPokemonOne.stats[4].base_stat >= 100
                        ? '100%'
                        : `${selectedPokemonOne.stats[4].base_stat}%`
                    }`,
                  }}
                ></div>
              </div>
              <p
                className={`${
                  selectedPokemonOne.stats[4].base_stat -
                    selectedPokemonTwo.stats[4].base_stat >
                  0
                    ? 'green-font'
                    : `${
                        selectedPokemonOne.stats[4].base_stat -
                          selectedPokemonTwo.stats[4].base_stat ==
                        0
                          ? 'grey-font'
                          : 'red-font'
                      }`
                }`}
              >
                <span>{`${
                  selectedPokemonOne.stats[4].base_stat -
                    selectedPokemonTwo.stats[4].base_stat >
                  0
                    ? '+'
                    : ''
                }`}</span>
                {selectedPokemonOne.stats[4].base_stat -
                  selectedPokemonTwo.stats[4].base_stat}
              </p>
            </div>

            <div className='base-stats-container'>
              <p>Speed</p>
              <p>{selectedPokemonOne.stats[5].base_stat}</p>
              <div
                className='w3-light-grey'
                style={{ height: '5px', borderRadius: '5px' }}
              >
                <div
                  className={`${
                    selectedPokemonOne.stats[5].base_stat > 50
                      ? 'w3-green'
                      : 'w3-red'
                  }`}
                  style={{
                    height: '5px',
                    borderRadius: '5px',
                    width: `${
                      selectedPokemonOne.stats[5].base_stat >= 100
                        ? '100%'
                        : `${selectedPokemonOne.stats[5].base_stat}%`
                    }`,
                  }}
                ></div>
              </div>
              <p
                className={`${
                  selectedPokemonOne.stats[5].base_stat -
                    selectedPokemonTwo.stats[5].base_stat >
                  0
                    ? 'green-font'
                    : `${
                        selectedPokemonOne.stats[5].base_stat -
                          selectedPokemonTwo.stats[5].base_stat ==
                        0
                          ? 'grey-font'
                          : 'red-font'
                      }`
                }`}
              >
                <span>{`${
                  selectedPokemonOne.stats[5].base_stat -
                    selectedPokemonTwo.stats[5].base_stat >
                  0
                    ? '+'
                    : ''
                }`}</span>
                {selectedPokemonOne.stats[5].base_stat -
                  selectedPokemonTwo.stats[5].base_stat}
              </p>
            </div>

            <p className='compare-result-footer'>
              For your information: the right side value (
              <span className='red-font'>red</span> /
              <span className='green-font'>green</span>) is the difference
              between your pokemon and other pokemon
            </p>
          </div>
        </div>
      )}

      {compareModalOne && <ComparePokemonListOne />}
      {compareModalTwo && <ComparePokemonListTwo />}

      <img className='top-overlay search-page' src={logoOverlay} />
    </div>
  )
}

export default ComparePage
