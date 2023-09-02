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

    const onRemove = (product) => {
        // find the product in the cartItems to be removed 
        foundProduct = cartItems.find(item => item._id === product._id);
        const cartItemsRemoveFoundProduct = cartItems.filter((item ) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity )
        setTotalQuantitites(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity) 
        setCartItems(cartItemsRemoveFoundProduct)

    }
    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find(item => item._id === id);
        index = cartItems.findIndex(product => product._id === id);
        // not state changing function 
        const cartItemsRemoveFoundProduct = cartItems.filter((item ) => item._id !== id);

        if(value === 'inc') {
            // remove the found product from cart for updating 
            let newCartItems = [...cartItemsRemoveFoundProduct, { ...foundProduct, quantity: foundProduct.quantity + 1}]
            
            setCartItems(newCartItems)
            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
            setTotalQuantitites( prevTotalQuantities => prevTotalQuantities + 1)

        } else if (value == 'dec') {
            if (foundProduct.quantity > 1) {
                let newCartItems = [...cartItemsRemoveFoundProduct, { ...foundProduct, quantity: foundProduct.quantity - 1}]
            
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
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice, 
                setTotalQuantitites
            }}>
                { children }
        </Context.Provider>  
    )
}


export const useStateContext = () => useContext(Context);