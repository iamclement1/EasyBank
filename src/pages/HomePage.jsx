import React from 'react'
import HeroPage from './HeroPage'
import Product from './Product'
import Article from './Article'
import Footer from '../components/Footer'



function HomePage() {
  return (
    <div>
      <HeroPage />
      <Product />
      <Article />
      <Footer />
    </div>
  )
}

export default HomePage
