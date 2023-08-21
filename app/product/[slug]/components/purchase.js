import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
export default function Purchase ({ product }) {
    
    const {image, name, details, price } = product;
    return (
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
                            <span className='num'>
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
    )
}