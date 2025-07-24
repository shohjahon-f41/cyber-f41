import React from 'react'
import HomeProducts from '../components/HomeProducts'
import { BrowseCat, Popular, Products, Sale, Banner } from '../components/Home';

function Home() {
  return (
    <>
      <Banner />
      <HomeProducts />
      <BrowseCat />
      <Products />
      <Popular />
      <Sale />
    </>
  )
}

export default Home