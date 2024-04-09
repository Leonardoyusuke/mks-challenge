import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
        MKS sistemas © Todos os direitos reservados
        </Container>
    );
}

const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
font-size: 12px;
font-family: 'Montserrat';
weight: 400;
background-color: #EEEEEE;
width: 100%;
height: 34px;
bottom: -185px;

`