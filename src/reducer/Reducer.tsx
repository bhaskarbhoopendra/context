import React from 'react';
import cart from "../component/Cart";

const Reducer = (state:any, action:any) => {
    if(action.type === "CLEAR_CART"){
        return {...state, cart:[]}
    }
    if(action.type === "DELETE"){
       return {
           ...state,
           cart: state.cart.filter((item:any)=> item.id !== action.payload)}
    }

    if(action.type === "INCREASE"){
       const tempCart= state.cart.map((item:any)=>{
           if(item.id === action.payload){
               return {...item, qty: item.qty+1}
           }
           return item
       });
       return {...state, cart: tempCart}
    }

    if(action.type === "DECREASE"){
        const tempCart= state.cart.map((item:any)=>{
            if(item.id === action.payload){
                return {...item, qty: item.qty-1}
            }
            return item
        }).filter((item:any)=> item.qty !== 0)
        ;
        return {...state, cart: tempCart}
    }
  if(action.type === "GET_TOTAL" ){
     const {total, qty} =state.cart.reduce((cartTotal:any, cartItem:any)=>{
         const {price, qty} = cartItem;
         const itemTotal = price*qty;
         cartTotal.total += itemTotal
       return cartTotal
     },{
         total:0,
         qty:0
     })

      return {...state, qty, total}
  }
    return state
};

export default Reducer;
