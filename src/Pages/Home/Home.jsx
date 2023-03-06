import { json } from 'react-router-dom'
import About from '../../Components/About/About'
import Hero from '../../Components/Hero/Hero'
import Categories from './Categories/Categories'
import './Home.css'
import LatestProtperties from './LatestProperties/LatestProtperties'

const Home = () => {

  return (
	  <section>
		<Hero />
		<Categories/>
		<LatestProtperties/>
		<About />
	  </section>
  )
}

export default Home