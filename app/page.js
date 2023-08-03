import React from 'react';

import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner}
 from '../components/index';

 const Home = () => {
  return (
    <>
    <HeroBanner />
    <div className='products-heading'> 
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>

      <div className='products-container'>
        {['product1', 'product2'].map((product, key) => <Product key={key} /> )}
      </div>
    </div>
    <FooterBanner />
    </>
    
  )
}

export default Home

