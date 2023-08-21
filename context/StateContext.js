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

    return (
        < Context.Provider 
            value={{showCart, 
                cartItems, 
                totalPrice, 
                totalQuantitites, 
                qty
            }}>
                { children }
        </Context.Provider>  
    )
}