import './HomePage.css'
import logo from '../images/logo_pokemon.png'
import pokedex from '../images/ic_pokedex.svg'
import FeatureCard from '../common/FeatureCard'
import searchIcon from '../images/ic_search.svg'
import compareIcon from '../images/ic_compare.svg'
import battleIcon from '../images/ic_battle.svg'
import Footer from '../common/Footer'
import pokedexOverlay from '../images/pokedex_overlay.svg'
import logoOverlay from '../images/pokemon_logo_overlay.svg'
import snorlax from '../images/img_snorlax.png'
import ash from '../images/img_ash.png'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='home-container'>
      <img className='logo' src={logo} alt='logo' />

      <div className='features-container'>
        <div className='welcome-container'>
          <p>Welcome to</p>
          <img src={pokedex} alt='pokedex' />
        </div>

        <div className='first-row'>
          <Link to='/search'>
            <FeatureCard
              classes='orange-bg'
              header='Search'
              desc='Pokemon'
              icon={searchIcon}
            />
          </Link>
        </div>

        <div className='second-row'>
          <Link to='/compare'>
            <FeatureCard
              classes='green-bg'
              header='Compare'
              desc='Pokemon'
              icon={compareIcon}
            />
          </Link>
          {/* <FeatureCard
            classes='blue-bg'
            header='Battle Arena'
            desc='Win Rate Prediction'
            icon={battleIcon}
          /> */}
        </div>
      </div>

      <img className='top-overlay' src={logoOverlay} />
      <img className='bottom-overlay' src={pokedexOverlay} />

      <img className='snorlax' src={snorlax} />
      <img className='ash' src={ash} />

      <Footer />
    </div>
  )
}

export default HomePage
