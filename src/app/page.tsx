'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header/Index";
import Items from "@/components/Items";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from "styled-components";
// Create a client
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
    <Container>
      <Header />
      <Items />
      <Footer />
    </Container>
    </QueryClientProvider>
  );
}

const Container = styled.div`
height : 1024px;
background-color : #F9F9F9;
`