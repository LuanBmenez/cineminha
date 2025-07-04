import React from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EnterButton } from "./Buttons";

const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: calc(100vh - 67px);
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #9DB899;
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const InfoSection = styled.div`
  margin-bottom: 40px;
`;

const InfoBox = styled.div`
  background-color: #2B2D36;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  color: #EE897F;
  font-family: "Sarala", sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  border-bottom: 1px solid #4E5A65;
  padding-bottom: 8px;
`;

const InfoText = styled.p`
  color: #ffffff;
  font-family: "Sarala", sans-serif;
  font-size: 20px;
  margin: 8px 0;
  font-weight: 400;
`;

function Final() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  

  const orderData = {
    movieTitle: searchParams.get('movieTitle') || "Filme não informado",
    weekday: searchParams.get('weekday') || "",
    date: searchParams.get('date') || "Data não informada", 
    time: searchParams.get('time') || "Horário não informado",
    seats: searchParams.get('seats') ? searchParams.get('seats').split(',') : [],
    buyerName: searchParams.get('buyerName') || "Nome não informado",
    buyerCPF: searchParams.get('buyerCPF') || "CPF não informado"
  };

  return (
    <Container>
      <Title>Pedido finalizado!</Title>
      
      <InfoBox>
        <InfoSection>
          <SectionTitle>Filme e sessão</SectionTitle>
          <InfoText>{orderData.movieTitle}</InfoText>
          <InfoText>{orderData.weekday} - {orderData.date} às {orderData.time}</InfoText>
        </InfoSection>
        
        <InfoSection>
          <SectionTitle>Ingressos</SectionTitle>
          {orderData.seats.map(seat => (
            <InfoText key={seat}>Assento {seat}</InfoText>
          ))}
        </InfoSection>
        
        <InfoSection>
          <SectionTitle>Comprador(a)</SectionTitle>
          <InfoText>Nome: {orderData.buyerName}</InfoText>
          <InfoText>CPF: {orderData.buyerCPF}</InfoText>
        </InfoSection>
      </InfoBox>
      
      <EnterButton onClick={() => navigate('/')}>
        Voltar para tela inicial
      </EnterButton>
    </Container>
  );
}

export default Final;
