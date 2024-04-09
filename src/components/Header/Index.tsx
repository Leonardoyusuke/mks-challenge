'use client'
import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "@/context/cart";
import { useContext } from "react";
import { cartInterface, menuOpenInterface } from "@/features/cart";
import MenuBurger from "../Cart";
import { useState } from "react";
import MenuContext from "@/context/menu";
import { motion } from "framer-motion"


export default function Header() {
    const {cart, setCart} = useContext<cartInterface>(CartContext)
    const {isOpen, setIsOpen} = useContext<menuOpenInterface>(MenuContext);
    console.log(isOpen)

function click(){
    setIsOpen(!isOpen)
}
const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 1 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 1 } },
  }

return (
    <Container>
        <Logo>MKS<div>Sistemas</div></Logo>
        <Cart onClick={click}><FaShoppingCart /><div>{cart.length}</div></Cart>
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"} variants={variants}><MenuBurger /></motion.nav>
        {/* {isOpen?  <MenuBurger />:"" } */}
    </Container>
)
}
const Cart = styled.div`
    position: relative;
    top: 29px;
    left: 1262px;
    width: 90px;
    height: 45px;
    background-color: white;
    border-radius: 8px;
    :hover {
        pointer: cursor;
    };
    & svg {
        position: absolute;
        width: 19px;
        height: 18px;
        top: 15px;
        right: 57px;
    }& div {
        position: absolute;
        top: 15px;
        right: 30px;
        font-size: 20px;
        font-weight: 300;
    }
    `

const Container = styled.div`
    position: relative;
    background-color: #0F52BA;
    width: 100%;
    height: 101px;
    `

const Logo = styled.div`
    width: 128px;
    height: 44px;
    position: absolute;
    top: 28px;
    left: 65px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 40px;
    paragraph: 10px;
    color: #FFFFFF;
    & div {
        position:absolute;
        font-size: 20px;
        font-weight:300;
        width: 200px;
        height: 45px;
        top: 15px;
        left: 100px;
    }
`
