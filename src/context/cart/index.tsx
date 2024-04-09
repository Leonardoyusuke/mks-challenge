'use client'
import { cartInterface } from "@/features/cart";
import { createContext, useState, ReactNode } from "react"

const CartContext = createContext<cartInterface>({
    cart: [],
    setCart: undefined
});

export function CartProvider({children}: { children: ReactNode }) {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
