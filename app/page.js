import React from 'react';

const Home = () => {
  return (
    <>
    HeroBanner
    <div> 
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>

      <div>
        {['product1', 'product2'].map((product, key) => <div key={key}> {product} </div>)}
      </div>
    </div>
    Footer 
    </>
    
  )
}

export default Home

