'use client' 
import { createContext, useState, ReactNode } from "react"
import { menuOpenInterface } from "@/features/cart"

const MenuContext = createContext<menuOpenInterface>({
    isOpen: false,
    setIsOpen: false
});

export function MenuProvider({children}: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext;