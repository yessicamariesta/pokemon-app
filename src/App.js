import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './home/HomePage'
import SearchPage from './search/search-page/SearchPage'
import ComparePage from './compare/compare-page/ComparePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='compare' element={<ComparePage />} />
      </Routes>
    </Router>
  )
}

export default App
