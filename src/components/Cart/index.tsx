import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { IoMdCloseCircle } from "react-icons/io";
import CartContext from "@/context/cart";
import { useContext } from "react";
import MenuContext from "@/context/menu";
import { cartInterface, menuOpenInterface } from "@/features/cart";


export default function MenuBurger() {

    const { cart, setCart } = useContext<cartInterface>(CartContext);
    const {isOpen, setIsOpen} = useContext<menuOpenInterface>(MenuContext);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function removeItem(id: any) {
        console.log(id);
        reduceQtdToZero(id);
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
        
    }

    function reduceQtdToZero(id: any) {
        const newCart = cart.map((product) => {
            if (product.id === id) {
                product.qtd = 0;
            }
            return product;
        });
        setCart(newCart);
    }
    function reduceQtd(id: any) {
        const newCart = cart.map((product) => {
            if (product.id === id) {
                product.qtd = product.qtd ? product.qtd - 1 : 1;
            }
            return product;
        });
        setCart(newCart);
    }
    function increaseQtd(id: any) {
        const newCart = cart.map((product) => {
            if (product.id === id) {
                product.qtd = product.qtd ? product.qtd + 1 : 2;
            }
            return product;
        });
        setCart(newCart);
    }

    const total = cart.reduce((acc, product) => {
        return acc + (Number(product.price) * Number(product.qtd));
    }, 0);

    return (
        <Container>
            <Cart>Carrinho de compras</Cart>
            <IoMdCloseCircle onClick={toggleMenu} />
            <Ul>
                {cart.map((product: {
                    qtd: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                    price: ReactNode | null | undefined;
                    photo: string | undefined;
                    id: React.Key | null | undefined;
                    name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                }) => (
                    <li key={product.id}>
                        <IoMdCloseCircle onClick={() => removeItem(product.id)} />
                        <img src={product.photo} />
                        <Name>{product.name}</Name>
                        <Qtt>qnt</Qtt>
                        <Quantity>
                            <span onClick={() => reduceQtd(product.id)}>-</span>
                            <div />
                            {product.qtd}
                            <div />
                            <span onClick={() => increaseQtd(product.id)}>+</span>
                        </Quantity>
                        <Price>R${(Number(product.price)) * (Number(product.qtd))}</Price>
                    </li>
                ))}
            </Ul>
            <Total><div>Total:  </div><div>R${total}</div></Total>
            <Finish>Finalizar Compra</Finish>
        </Container>
    );
};
const Finish = styled.div`
position: absolute;
width: 486px;
height: 97px;
bottom: 0px;
background-color: black;
color: white;
font-family: 'Montserrat';
font-size: 28px;
font-weight: 700;
display: flex;  
justify-content: center;
align-items: center;

`

const Total = styled.div`
display: flex;
position: absolute;
width: 80px;
height: 15px;
top: 850px;
left: 47px;
font-family: 'Montserrat';
font-size: 28px;
font-weight: 700;
color: white;
& div {
    margin-right: 240px;
`
const Price = styled.div`
position: absolute;
width: 62px;
height: 17px;
top: 45px;
left: 302px;
font-family: 'Montserrat';
font-size: 14px;
font-weight: 700;
`

const Qtt = styled.div`
position: absolute;
top: 25px;
font-family: 'Montserrat';
left: 212px;
width: 11px;
height: 6px;
`
const Quantity = styled.div`
display: flex;
justify-content: space-evenly;
border: 1px solid grey;
border-radius: 8px;
boder-color: black;
position: absolute;
width: 60px;
height: 19px;
top: 41px;
left: 220px;
:hover {
    cursor: pointer;
}
& div {
    margin-top: 2px;
    height: 12px;
    width: 0px;
    left: 229px;
    border: 1px solid grey;
} 
`
const Name = styled.div`
position: absolute;
color: black; 
top: 37px;
left: 90px;
width: 113px;
height: 33px;
font-family: 'Montserrat';
font-size: 13px;
font-weight: 400;
`

const Ul = styled.ul`
width: 379px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-left: 50px;
margin-top: 100px;
& li {
    position: relative;
    margin-top: 30px;
    background-color: white;
    width: 379px;
    height: 95px;
    border-radius: 8px;
& img {
    position: absolute;
    top: 25px;
    left: 23px;
    width: 46px;
    height: 57px;
}svg {
    position: absolute;
    top: -5px;
    left: 365px;
    width: 20px;
    height: 20px;
}
`


const Container = styled.div`
z-index: 100;
position: absolute;
top: 0px;
right: 0px;
width: 486px;
height: 1024px;
background-color: #0F52BA;
& svg {
    position: absolute;
    top: 39px;
    right: 30px;
    width: 38px;
    height: 38px;
    color: black;
}

`
const Cart = styled.div`
position: absolute;
font-family: 'Montserrat';
top: 36px;
left: 30px;
width: 180px;
height: 56px;
font-size: 27px;
font-weight: 700;
color: white;
`