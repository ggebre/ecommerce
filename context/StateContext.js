'use client'
import React, { createContext, useContext, useState, useEffect  } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( { children }) => {
    const [showCart, setShowCart ] = useState(false);
    const [cartItems, setCartItems ] = useState();
    const [ totalPrice, setTotalPrice ] = useState();
    const [ totalQuantitites, setTotalQuantitites] = useState();
    const [ qty, setQty ] = useState(1);

    const onAdd = (product, quantity) => {
        // check if the product is in the cart 
        const checkProudctInCart = cartItems.find((item) => item._id === product._id);
        if (checkProudctInCart) {
            setTotalPrice(prevTototalPrice => prevTototalPrice + product.price * quantity )
            setTotalQuantitites(prevTotalQuantity => prevTotalQuantity + quantity)

            const updatedCartItems = cartItems.map(cartProduct => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity 
                }
            })
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1
            return prevQty - 1;
        })
    }


    return (
        < Context.Provider 
            value={{showCart, 
                cartItems, 
                totalPrice, 
                totalQuantitites, 
                qty,
                incQty, 
                decQty
            }}>
                { children }
        </Context.Provider>  
    )
}


export const useStateContext = () => useContext(Context);