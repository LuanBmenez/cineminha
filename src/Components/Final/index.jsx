
import { useNavigate, useLocation } from "react-router-dom";
import { EnterButton } from "../Buttons";
import { Container, Title, InfoBox, InfoSection, SectionTitle, InfoText } from "./styles";


function Final() {
  const navigate = useNavigate();
  const location = useLocation();


  const orderData = location.state || {
    movieTitle: "Filme não informado",
    weekday: "",
    date: "Data não informada", 
    time: "Horário não informado",
    seats: [],
    buyerName: "Nome não informado",
    buyerCPF: "CPF não informado"
  };


  const maskCPF = (cpf) => {
    if (!cpf || cpf === "CPF não informado") return cpf;
    const cleanCPF = cpf.replace(/[^0-9]/g, '');
    if (cleanCPF.length === 11) {
      return `${cleanCPF.slice(0, 3)}.***.***-${cleanCPF.slice(-2)}`;
    }
    return cpf;
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
          {orderData.seats && orderData.seats.length > 0 ? (
            orderData.seats.map((seat, index) => (
              <InfoText key={index}>Assento {seat}</InfoText>
            ))
          ) : (
            <InfoText>Nenhum assento selecionado</InfoText>
          )}
        </InfoSection>
        
        <InfoSection>
          <SectionTitle>Comprador(a)</SectionTitle>
          <InfoText>Nome: {orderData.buyerName}</InfoText>
          <InfoText>CPF: {maskCPF(orderData.buyerCPF)}</InfoText>
        </InfoSection>
      </InfoBox>
      
      <EnterButton onClick={() => navigate('/')}>
        Voltar para tela inicial
      </EnterButton>
    </Container>
  );
}

export default Final;
