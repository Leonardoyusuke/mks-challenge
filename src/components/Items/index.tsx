import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from "styled-components";
import { BiArchive } from "react-icons/bi";
import CartContext from "@/context/cart";
import { useContext } from "react";
import { cartInterface } from "@/features/cart";


interface ItemType {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number,
    photo: string,
    qtd?: number
  }


export default function Items() {
  const {cart, setCart} = useContext<cartInterface>(CartContext)

  const fetchItems = async () => {
    const res = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
    console.log(res.data.products);
    return res.data.products; // Return the products array
  }

  const { data: products, error, isLoading } = useQuery(
    {
      queryKey: ['items'],
      queryFn: fetchItems,
    });

    function handleAddToCart(product: ItemType) {
      product.qtd = 1; // Set the product quantity to 1
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
      setCart([...cart]);
      } else {
      setCart([...cart, product]);
      }
    }

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        products.map((product: ItemType) => (
          <Item key={product.id}>
            <img src={product.photo} alt={product.name} />

            <Title>{product.name}</Title>
            <Price>
              <div>R${product.price}</div>
            </Price>
            <Description>{product.description}</Description>
            <Buy onClick={() => handleAddToCart(product)} ><div><BiArchive />COMPRAR</div></Buy>
          </Item>
        ))
      )}
    </Container>
  );
}
const Buy = styled.button`
position : absolute;
top : 253px;
width : 218px;
height : 32px;
border-radius : 0px 0px 8px 8px;
background-color : #0F52BA;
color : white;
:hover {
  cursor : pointer;
}
& div {
  position : absolute;
  display : flex;
  justify-content : space-between;
  top : 7px;
  left : 57px;
  width : 103px;
  height : 15px;
  font-family : 'Montserrat';
  font-size : 15px;
  weight : 700;
}
`

const Description = styled.div`
width : 192px;
height : 25px;
position : absolute;
weight : 300;
size : 10px;
top : 210px;
left : 14px;
font-family : 'Montserrat';
font-size : 10px; 
color : #2C2C2C
`

const Price = styled.div`
width : 72px;
height : 26px;
position : absolute;
top : 173px;
left : 135px;
border-radius : 5px;
background-color : #373737;
  & div {
  width : 64px;
  height : 18px;
  border-radius : 5px;
  background-color : #373737;
  font-family : 'Montserrat';
  font-size : 15px;
  weight : 700;
  color : white;
  position : absolute;
  margin : 5px;
}
`

const Item = styled.div`
Width : 217px;
position : relative;
Height : 285px;
border-radius : 8px;
background-color : #FFFFFF;
box-shadow : 0px 0px 4px rgba(0, 0, 0, 0.25);
& img {
  position : absolute;
  top : 18px;
  left : 53px;
  width : 111px;
  height : 138px;
}`

const Title = styled.div`
  position : absolute;
  weight : 400;
  width : 124px;
  size : 16px;
  font-family : 'Montserrat';
  top : 170px;
  left : 14px;
`

const Container = styled.div`
margin: auto;
margin-top: 100px;
display : flex;
justify-content : space-between;
flex-wrap : wrap;
width : 938px;
height : 601px;
top : 157px;
left : 247px;`