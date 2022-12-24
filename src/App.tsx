import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {useShoppingCart} from "./context/ShoppingCartContext";
import Cart from "./component/Cart";

function App() {
  const {cart}:any = useShoppingCart()
  return (
    <div style={{
        width:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:" 0 8px 8px -4px lightblue"
    }}>
     <Cart items = {cart}/>
    </div>
  )
}

export default App
