import React from 'react';
import {client, urlFor} from '../../../lib/client';
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '@/components';

async function ProductDetail ({params}) {
    const {product, products}=  await getData(params);
    const {image, name, details, price } = product;
    return (
        <>

        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    {/* <img src={urlFor(image && image[0])} /> */}
                    <img src='' />
                </div>
                {/* <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img 
                            key={i}
                            // src={urlFor(item)}
                            src=''
                            className=''
                            onMouseEnter=""
                        />
                    ))}
                </div> */}
                <div className='product-detail-desc' >
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className='price'>${price}</p>
                    <div className='quantity'>
                        <h3>Quantity:</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick="">
                                <AiOutlineMinus />
                            </span>
                            <span className='num' onClick="">
                                0
                            </span>
                            <span className='plus' onClick="">
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' 
                            className='add-to-cart'
                            onClick="">Add to Cart</button>
                        <button type='button' 
                            className='buy-now'
                            onClick="">Buy Now</button>
                    </div>
                </div>
            </div>
            
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
        </>
    )
}



export async function getData({slug}) {
    const productQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`
    const product = await client.fetch(productQuery);
    console.log(product)
    
    const prductsQuery = '*[_type == "product"]'
    const products = await client.fetch(prductsQuery);

    
    return {product, products}
    
}
export default ProductDetail;