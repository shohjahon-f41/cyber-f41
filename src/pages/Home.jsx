import React from 'react'
import { BrowseCat, Popular, Products, Sale, Banner } from '../components/Home';

function Home() {
  return (
    <>
      <Banner />
      <BrowseCat />
      <Products />
      <Popular />
      <Sale />
    </>
  )
}

export default Home