import React from 'react'
import { Banner, HomeProducts } from "../components/Home/index"
import { BrowseCat, Popular, Products, Sale } from '../components/Home';

function Home() {
  return (
    <section className="home">
      <Banner />
      <HomeProducts />
      <BrowseCat />
      <Products />
      <Popular />
      <Sale />
    </section>
  )
}

export default Home