import React, { useState, useEffect, useContext } from 'react'

const AppContext = React.createContext()

const homeURL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonTypeURL = 'https://pokeapi.co/api/v2/type/'

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [filterLoading, setFilterLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [pokemons, setPokemons] = useState({
    next: '',
    prev: '',
    data: [],
  })
  const [singlePokemon, setSinglePokemon] = useState(null)
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [filterNameList, setFilterNameList] = useState([])
  const [filterData, setFilterData] = useState([])
  const [selectedFilterURL, setSelectedFilterURL] = useState('')
  const [pokemonType, setPokemonType] = useState(null)
  const [pokemonTypeData, setPokemonTypeData] = useState([])
  const [filterSelected, setFilterSelected] = useState(false)
  const [selectedFilterName, setSelectedFilterName] = useState('')
  const [pokemonOwner, setPokemonOwner] = useState('')
  const [chosenPokemon, setChosenPokemon] = useState(null)
  const [finalPokemon, setFinalPokemon] = useState({
    pokemon1: null,
    pokemon2: null,
  })

  // useEffect for HOME POKEMON

  const fetchPokemon = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url || homeURL)
      const data = await response.json()

      const { results, next, previous } = data

      let temp = []
      for (let i = 0; i < results.length; i++) {
        const res = await fetch(results[i].url)
        const data = await res.json()
        temp.push(data)
      }

      setPokemons({
        next,
        previous,
        data: temp,
      })
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchPokemon()
    }, 1000)

    return () => clearTimeout(getData)
  }, [])

  // useEffect FOR SEARCH POKEMON

  useEffect(() => {
    setLoading(true)
    const getData = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${homeURL}${search}`)
          const data = await response.json()
          setSinglePokemon(data)
          console.log(singlePokemon)
        } catch (error) {
          console.log(error)
        }
      }
      if (search) {
        fetchData()
      }
      setLoading(false)
      setSinglePokemon(null)
    }, 500)

    return () => clearTimeout(getData)
  }, [search])

  // useEffect FOR FILTER TYPE POKEMON

  useEffect(() => {
    setFilterLoading(true)
    const fetchData = async () => {
      let typeData = [{}]
      let type = []
      try {
        const response = await fetch(pokemonTypeURL)
        const data = await response.json()

        const { results } = data

        for (let i = 0; i < results.length; i++) {
          typeData.push(results[i])
          type.push(results[i].name)
        }
        setFilterNameList(type)
        setFilterData(typeData)
      } catch (error) {
        console.log(error)
      }
      setFilterLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedFilterURL) {
          const res = await fetch(selectedFilterURL)
          const data = await res.json()
          // console.log(data)
          setPokemonType(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [selectedFilterURL])

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      let pokemonData = []
      try {
        if (pokemonType) {
          const { pokemon } = pokemonType

          for (let i = 0; i < pokemon.length; i++) {
            const res = await fetch(pokemon[i].pokemon.url)
            const data = await res.json()
            pokemonData.push(data)
            setPokemonTypeData(pokemonData)
          }
          if (pokemonTypeData) {
            setFilterSelected(true)
          }
          setShowFilterModal(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    setLoading(false)
  }, [pokemonType])

  // OTHER FUNCTIONS

  const selectPokemons = (id) => {
    const pokemon = pokemons.data.find((pokemon) => pokemon.id === id)
    setSelectedPokemon(pokemon)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const selectFilterPokemons = (id) => {
    const pokemon = pokemonTypeData.find((pokemon) => pokemon.id === id)
    setSelectedPokemon(pokemon)
    setShowModal(true)
  }

  const selectFilter = (type) => {
    const selectedType = filterData.filter((item) => item.name === type)
    const selectedTypeURL = selectedType.map((item) => item.url)
    const selectedTypeName = selectedType.map((item) => item.name)
    const newSelectedTypeURL = selectedTypeURL.toString()
    const newSelectedTypeName = selectedTypeName.toString()

    // console.log(selectedType)
    // console.log(newSelectedTypeURL)
    console.log(newSelectedTypeName)
    setSelectedFilterURL(newSelectedTypeURL)
    setSelectedFilterName(newSelectedTypeName)
  }

  const openFilterModal = () => {
    setShowFilterModal(true)
  }

  const closeFilterModal = () => {
    setShowFilterModal(false)
  }

  const clearFilterPokemon = () => {
    setFilterSelected(false)
    setPokemonTypeData([])
  }

  const showCompareModal = (type) => {
    setShowModal(true)
    setPokemonOwner(type)
    console.log('test')
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        pokemons,
        setPokemons,
        search,
        setSearch,
        singlePokemon,
        setSinglePokemon,
        showModal,
        selectPokemons,
        selectedPokemon,
        closeModal,
        fetchPokemon,
        openFilterModal,
        showFilterModal,
        closeFilterModal,
        filterNameList,
        selectFilter,
        pokemonType,
        pokemonTypeData,
        filterSelected,
        selectFilterPokemons,
        pokemonTypeData,
        clearFilterPokemon,
        selectedFilterName,
        showCompareModal,
        pokemonOwner,
        chosenPokemon,
        setChosenPokemon,
        finalPokemon,
        setFinalPokemon,
        filterLoading,
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
