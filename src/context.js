import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const AppContext = createContext()

const homeURL = 'https://pokeapi.co/api/v2/pokemon/'

const AppProvider = ({ children }) => {
  const [homeLoading, setHomeLoading] = useState(false)
  const [homeSearchValue, setHomeSearchValue] = useState('')
  const [homePokemonData, setHomePokemonData] = useState(null)
  const [next, setNext] = useState('')
  const [back, setBack] = useState('')
  const [pokemonDetailData, setPokemonDetailData] = useState(null)
  const [pokemonModalBox, setPokemonModalBox] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(false)
  const [pokemonType, setPokemonType] = useState('')
  const [compareModalOne, setCompareModalOne] = useState(false)
  const [compareModalTwo, setCompareModalTwo] = useState(false)
  const [selectedPokemonOne, setSelectedPokemonOne] = useState(null)
  const [selectedPokemonTwo, setSelectedPokemonTwo] = useState(null)
  const [pokemonOneData, setPokemonOneData] = useState(null)
  const [pokemonTwoData, setPokemonTwoData] = useState(null)

  const [value] = useDebounce(homeSearchValue, 1000)

  const fetchHomePokemonURL = async (url) => {
    setHomeLoading(true)
    let homePokemonURL = []
    let homePokemonData = []
    let singlePokemonData = []
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)

      if (data.next) {
        setNext(data.next)
      }

      if (data.previous) {
        setBack(data.previous)
      }

      if (!homeSearchValue) {
        for (let i = 0; i < data.results.length; i++) {
          homePokemonURL.push(data.results[i].url)
        }

        for (let i = 0; i < homePokemonURL.length; i++) {
          const res = await fetch(homePokemonURL[i])
          const data = await res.json()
          homePokemonData.push(data)
        }
        // console.log(homePokemonData)
        setHomePokemonData(homePokemonData)
        setPokemonOneData(homePokemonData)
        setPokemonTwoData(homePokemonData)
      }

      if (homeSearchValue) {
        singlePokemonData.push(data)
        setHomePokemonData(singlePokemonData)
      }

      // console.log(homePokemonData)
    } catch (error) {
      console.log(error)
      setHomePokemonData(null)
    }
    setHomeLoading(false)
  }

  const fetchPokemonCardDetail = (id) => {
    const specificPokemon = homePokemonData.find((item) => item.name === id)
    const body = document.querySelector('body')
    setPokemonDetailData(specificPokemon)
    setPokemonModalBox(true)
    body.classList.add('show-pokemon-detail')
  }

  const nextPageFunc = (next) => {
    fetchHomePokemonURL(next)
    setNext('')
  }

  const prevPageFunc = (back) => {
    fetchHomePokemonURL(back)
    setBack('')
  }

  useEffect(() => {
    fetchHomePokemonURL(homeURL)
  }, [])

  useEffect(() => {
    fetchHomePokemonURL(`${homeURL}${value.toLowerCase()}`)
  }, [value])

  return (
    <AppContext.Provider
      value={{
        homeLoading,
        setHomeLoading,
        homeSearchValue,
        setHomeSearchValue,
        homePokemonData,
        setHomePokemonData,
        fetchHomePokemonURL,
        next,
        setNext,
        back,
        setBack,
        fetchPokemonCardDetail,
        pokemonDetailData,
        setPokemonModalBox,
        pokemonModalBox,
        fetchHomePokemonURL,
        setHomePokemonData,
        selectedFilter,
        setSelectedFilter,
        pokemonType,
        setPokemonType,
        nextPageFunc,
        prevPageFunc,
        compareModalOne,
        setCompareModalOne,
        compareModalTwo,
        setCompareModalTwo,
        selectedPokemonOne,
        setSelectedPokemonOne,
        selectedPokemonTwo,
        setSelectedPokemonTwo,
        pokemonOneData,
        setPokemonOneData,
        pokemonTwoData,
        setPokemonTwoData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
