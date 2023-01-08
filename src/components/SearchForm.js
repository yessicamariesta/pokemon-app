import React from 'react'
import { useGlobalContext } from '../context'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function SearchForm() {
  const { search, setSearch, setSinglePokemon, filterSelected } =
    useGlobalContext()

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

  return (
    <>
      {!filterSelected && (
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
      )}
    </>
  )
}

export default SearchForm
