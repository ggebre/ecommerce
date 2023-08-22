'use client'
import React, { createContext, useContext, useState, useEffect  } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( { children }) => {
    const [showCart, setShowCart ] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ totalQuantitites, setTotalQuantitites] = useState(0);
    const [ qty, setQty ] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        // check if the product is in the cart 
        
        const checkProudctInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice(prevTototalPrice => prevTototalPrice + product.price * quantity )
        setTotalQuantitites(prevTotalQuantity => prevTotalQuantity + quantity)

        if (checkProudctInCart) {
        
            const updatedCartItems = cartItems.map(cartProduct => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity 
                }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}])
        }
    }
    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find(item => item._id === id);
        index = cartItems.findIndex(product => product._id === id);

        if(value === 'inc') {
            let newCartItems = [...cartItems, { ...product, quantity: product.quantity + 1}]
            
            setCartItems(newCartItems)
            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
            setTotalQuantitites( prevTotalQuantities => prevTotalQuantities + 1)

        } else if (value == 'dec') {
            if (foundProduct.quantity > 1) {
                let newCartItems = [...cartItems, { ...product, quantity: product.quantity - 1}]
            
                setCartItems(newCartItems)
                setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)
                setTotalQuantitites( prevTotalQuantities => prevTotalQuantities - 1)
            }
            
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
            value={{
                showCart, 
                cartItems, 
                setShowCart,
                totalPrice, 
                totalQuantitites, 
                qty,
                incQty, 
                decQty,
                onAdd,
                toggleCartItemQuantity
            }}>
                { children }
        </Context.Provider>  
    )
}


export const useStateContext = () => useContext(Context);