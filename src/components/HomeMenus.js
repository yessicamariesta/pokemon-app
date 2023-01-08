import React from 'react'
import searchIcon from '../img/ic_search.svg'
import compare from '../img/ic_compare.svg'
import battle from '../img/ic_battle.svg'
import { useNavigate } from 'react-router-dom'

function HomeMenus() {
  const navigate = useNavigate()

  const searchHandleClick = () => {
    navigate('search')
  }

  const compareHandleClick = () => {
    navigate('compare')
  }

  return (
    <>
      <div className='menus-container'>
        <div className='menu-container orange-bg' onClick={searchHandleClick}>
          <div className='menu-text'>
            <p>Search</p>
            <p>Pokemon</p>
          </div>

          <div className='menu-icon'>
            <div className='border-line'></div>
            <img src={searchIcon} />
          </div>
        </div>
      </div>

      <div className='menus-container'>
        <div className='menu-container green-bg' onClick={compareHandleClick}>
          <div className='menu-text'>
            <p>Compare</p>
            <p>Pokemon</p>
          </div>

          <div className='menu-icon'>
            <div className='border-line'></div>
            <img src={compare} />
          </div>
        </div>

        <div className='menu-container blue-bg'>
          <div className='menu-text'>
            <p>Battle Arena</p>
            <p>Win Rate Prediction</p>
          </div>

          <div className='menu-icon'>
            <div className='border-line'></div>
            <img src={battle} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeMenus
