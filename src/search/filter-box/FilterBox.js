import React, { useEffect, useState } from 'react'
import './FilterBox.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useGlobalContext } from '../../context'
import PokemonDetailLoading from '../../common/PokemonDetailLoading'

const filterURL = 'https://pokeapi.co/api/v2/type/'

const FilterBox = ({ filterBox, setFilterBox }) => {
  const [typeData, setTypeData] = useState(null)
  const [filterLoading, setFilterLoading] = useState(false)

  const {
    setHomePokemonData,
    setHomeLoading,
    setSelectedFilter,
    setPokemonType,
  } = useGlobalContext()

  const closeFilterBox = () => {
    setFilterBox(false)
    const body = document.querySelector('body')
    body.classList.remove('show-pokemon-detail')
  }

  const fetchTypeList = async (url) => {
    setFilterLoading(true)
    const typeData = []
    const res = await fetch(url)
    const data = await res.json()

    for (let i = 0; i < data.results.length; i++) {
      typeData.push({ type: data.results[i].name, url: data.results[i].url })
    }
    setTypeData(typeData)
    setFilterLoading(false)
  }

  const fetchTypeURL = async (type) => {
    closeFilterBox()
    setHomeLoading(true)
    let homePokemonURL = []
    let homePokemonData = []

    try {
      const specificURL = typeData.find((item) => item.type === type)

      const res = await fetch(specificURL.url)
      const data = await res.json()

      for (let i = 0; i < data.pokemon.length; i++) {
        homePokemonURL.push(data.pokemon[i].pokemon.url)
      }

      for (let i = 0; i < homePokemonURL.length; i++) {
        const res = await fetch(homePokemonURL[i])
        const data = await res.json()
        homePokemonData.push(data)
      }
      setHomePokemonData(homePokemonData)
      setPokemonType(specificURL.type)
      console.log(specificURL.type)
    } catch (error) {
      console.log(error)
    }
    setHomeLoading(false)
  }

  const fetchSelectedFilter = (type, e) => {
    fetchTypeURL(type)
    setSelectedFilter(true)

    const element = e.currentTarget
    element.classList.add('filter-active')
    // const element = e.currentTarget

    // if (element == !e.currentTarget) {
    //   element.classList.remove('active')
    // }
    // if (setSelectedFilter) {
    //   element.classList.add('filter-active')
    // }

    console.log(element)
  }

  useEffect(() => {
    fetchTypeList(filterURL)
  }, [])

  return (
    <div className={`overlay ${filterBox && 'show'} `}>
      <div className='filter-box-container'>
        <div className='filter-box-header'>
          <p>Filter by type</p>
          <p onClick={closeFilterBox}>
            <AiOutlineCloseCircle />
          </p>
        </div>

        {filterLoading && <PokemonDetailLoading />}
        <div className='filter-box-body'>
          <div className='filter-box-list'>
            {typeData?.map((item, index) => {
              return (
                <div
                  className='filter-card'
                  // className={`${
                  //   active ? 'filter-card filter-active' : 'filter-card'
                  // }`}

                  // className={``}
                  key={index}
                  onClick={(e) => fetchSelectedFilter(item.type, e)}
                >
                  <p>Type</p>
                  <p className='type'>{item.type}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBox
