import './App.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/Global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Search from './pages/Search'
import Home from './pages/Home'
import Compare from './pages/Compare'

const theme = {
  colors: {
    orange:
      'linear-gradient(90deg, rgb(232, 92, 74) 0%, rgb(255, 207, 112) 100%);',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/compare' element={<Compare />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  )
}

export default App
