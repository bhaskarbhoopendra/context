import {createContext, useContext, useEffect, useReducer} from "react";
import cartItems from '../data/data'
import Reducer from "../reducer/Reducer";


const ShoppingCartContext = createContext({})

const initialState ={
    cart:cartItems,
    qty:0,
    total:0
}

export const  ShoppingCartProvider = ({children}:any)=>{
    const [state, dispatch] = useReducer(Reducer,initialState)

    const clearCart = ()=>{
        return dispatch({
            type:"CLEAR_CART"
        })
    }

    const deleteOneItem = (id:number)=>{
        return dispatch({
            type:"DELETE",
            payload: id
        })
    }

    const increaseCartItem = (id:number)=>{
        return dispatch({
            type:"INCREASE",
            payload: id
        })
    }

    const decreaseCartItem = (id:number)=>{
        return dispatch({
            type:"DECREASE",
            payload: id
        })
    }

    useEffect(()=>{
        dispatch({
            type:"GET_TOTAL"
        })
    },[state.cart])

    return <ShoppingCartContext.Provider value={{
     ...state,
        clearCart,
        deleteOneItem,
        increaseCartItem,
        decreaseCartItem
    }}>
        {children}
    </ShoppingCartContext.Provider>
}

export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext)
}