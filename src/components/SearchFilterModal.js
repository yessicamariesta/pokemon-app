import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useGlobalContext } from '../context'
import spinner from '../img/ic_pokeball.png'

function SearchFilterModal() {
  const {
    closeFilterModal,
    filterNameList,
    selectFilter,
    pokemonTypeData,
    filterLoading,
  } = useGlobalContext()

  return (
    <>
      <div className='filter-modal-overlay'>
        <div className='filter-modal-container'>
          <div className='filter-modal-header'>
            <p>Filter by Type</p>
            <p onClick={() => closeFilterModal()}>
              <AiOutlineCloseCircle />
            </p>
          </div>
          <div className='filter-modal-body'>
            {filterNameList.map((item, index) => {
              return (
                <div
                  className='filter-modal-type'
                  key={index}
                  onClick={() => selectFilter(item)}
                >
                  <p>Type</p>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </div>
        {filterLoading && (
          <div className='spinner-container'>
            <img src={spinner} className='spinner' />
          </div>
        )}
      </div>
    </>
  )
}

export default SearchFilterModal
