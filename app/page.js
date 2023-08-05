import React from 'react';

import { client} from '../lib/client';
import {Product, FooterBanner, HeroBanner}
 from '../components/index';

 async function Home () {
  const { products, bannerData }=  await getData()

  return (
    <>
    <HeroBanner heroBanner={bannerData.length  && bannerData[0]}/>
    
    <div className='products-heading'> 
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>

      <div className='products-container'>
        {products.map((product) => <Product key={product._id} product={product}/> )}
      </div>
    </div>
    <FooterBanner footerBanner={bannerData.length  && bannerData[0]}/>
    </>
    
  )
}
export async function getData() {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query);
    

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery);
    
    return {products, bannerData}
    
}
export default Home

