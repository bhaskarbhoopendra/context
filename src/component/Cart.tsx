import React from 'react';
import {useShoppingCart} from "../context/ShoppingCartContext";

const Cart = ({items}:any) => {
    const {clearCart, deleteOneItem, decreaseCartItem,increaseCartItem, total}:any = useShoppingCart()
    return (
        <>
            <h1 style={{
                textAlign:"center"
            }}>My Cart</h1>
            {items.map((item:any)=>{
                const {id, price, qty, name,image} :any= item
                return <article key={id}
                 style={{
                     display: "flex",
                     justifyContent:"space-around",
                    // backgroundColor:"#7ed6df",
                     marginBottom:"5px",
                     height:"auto",
                     alignItems:"center",
                     width:"50%"
                 }}
                >
                    <p>{name}</p>
                    <div>
                        <img style={{
                        height:"150px"
                        }} src={image} alt={name}/>
                    </div>
                    <div style={{
                        justifyContent:"space-around"
                    }}>
                        <p onClick={()=> increaseCartItem(id)}>+</p>
                        <p>{ qty}</p>
                        <p onClick={()=> decreaseCartItem(id)}>-</p>
                    </div>
                    <div>
                        <button
                         style={{
                             backgroundColor:"brown",
                             color:"white",
                             border:"none",
                             padding:"15%"

                         }}
                         onClick={()=>deleteOneItem(id)}
                        >Delete</button>
                    <p>{`$${price}`}</p>
                    </div>
                </article>
            })}
            <div style={{
                textAlign:"center"
            }}>
                <p>{`Total - $${total}`}</p>
                <button style={{
                    backgroundColor:"#eb4d4b",
                    border:"none",
                    fontSize:"18px",
                    padding:"2%",
                    color:"white"
                }}
                onClick={clearCart}
                >Clear Item</button>
            </div>
        </>

    );
};

export default Cart;
