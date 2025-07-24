import React from 'react';
import { BrowseCat, Popular, Products, Sale } from '../components';


function Home() {
  return (
    <section className="home">
      <BrowseCat />
      <Products />
      <Popular />
      <Sale />
    </section>
  )
}

export default Home