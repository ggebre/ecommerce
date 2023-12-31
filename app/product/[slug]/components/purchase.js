'use client'
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '@/context/StateContext';
export default function Purchase ({ product }) {
    
    const {image, name, details, price } = product;
    const { decQty, incQty, qty, onAdd, setShowCart, setQty} = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    }
    const handleAddToCart = () => {
        onAdd(product, qty);
        setQty(1);
    }
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
                            <span className='minus' onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className='num'>
                                {qty}
                            </span>
                            <span className='plus' onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' 
                            className='add-to-cart'
                            onClick={handleAddToCart}>Add to Cart</button>
                        <button type='button' 
                            className='buy-now'
                            onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>   
    )
}