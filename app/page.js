import React from 'react';

import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner}
 from '../components/index';

 async function Home () {
  const products =  await getData()
  return (
    <>
    <HeroBanner />
    
    <div className='products-heading'> 
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>

      <div className='products-container'>
        {products.map((product, key) => <Product key={key} product={product}/> )}
      </div>
    </div>
    <FooterBanner />
    </>
    
  )
}
export async function getData() {
    const data = await client.fetch('*[_type == "product"]');
    
    // if (!products.ok){
    //   throw new Error("Failted to fetch data");
    // }
    return data
    // return {
    //   props: {
    //     products
    //   }
    // };
}
export default Home

