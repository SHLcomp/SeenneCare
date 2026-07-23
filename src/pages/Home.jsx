import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero.jsx'
import './Home.scss'
import BestSellers from '../components/bestsellers/BestSellers.jsx'
import Offer from '../components/offer/Offer.jsx'
import Concerns from '../components/concerns/Concerns.jsx'
import { Collections } from '../components/collections/Collections.jsx'
import Offer2 from '../components/offer/Offer2.jsx'
import Footer from '../components/footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero/>
        <BestSellers />
        <Offer />
        <Concerns />
        <Collections />
        <Offer2 />
        <Footer />
    </div>
  )
}

export default Home