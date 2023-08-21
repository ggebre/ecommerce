'use client'

import {urlFor} from '../../../../lib/client';
import { useState } from 'react';

export default function ProductImage({ product}) {
    const {image} = product 
    const [index, setIndex] = useState(0)

    return (
        <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} className='product-detail-image'/>    
                </div>
                <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img 
                            key={i}
                            src={urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div> 
    )
}

