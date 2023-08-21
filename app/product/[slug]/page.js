import React  from 'react';
import {client} from '../../../lib/client';
import { Product } from '@/components';
import Purchase from './components/purchase';
import ProductImage from './components/image';

async function ProductDetail ({params}) {
    const {product, products}=  await getData(params);
    
    
    return (
        <div>
            <div className='product-detail-container'>
                    <ProductImage product={product}/>
                    <Purchase product={product}/>        
            </div>
        <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => (
                            <Product key={item._id} 
                                product={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}



export async function getData({slug}) {
    
    const productQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`
    const product = await client.fetch(productQuery);
    
    
    const prductsQuery = '*[_type == "product"]'
    const products = await client.fetch(prductsQuery);
    
    
    
    return {product, products}
    
}
export default ProductDetail;