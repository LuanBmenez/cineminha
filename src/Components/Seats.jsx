import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: calc(100vh - 67px);
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

const BackButton = styled.button`
  background-color: #ee897f;
  font-family: "Sarala", sans-serif;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e67c70;
  }
`;
const SeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  justify-items: center;
`;

const Sidebar = styled.div`
  width: 99%;
  height: 3px;
  border: 1px solid #4e5a65;
  background-color: #4e5a65;
  margin: 15px 0;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 18px;
  padding: 40px;
`;

const SeatButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.available {
    background-color: #9DB899;
    border: 1px solid #808F9D;
    color: #000;
  }
  
  &.unavailable {
    background-color: #FADBC5;
    border: 2px solid #EE897F;
    color: #000;
    cursor: not-allowed;
  }
`;
const FormSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #293845;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  font-size: 18px;
`;

const ReserveButton = styled.button`
  background-color: #e8833a;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 14px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #d67429;
  }
`;

function Seats() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [buyerName, setBuyerName] = useState("");
  const [buyerCPF, setBuyerCPF] = useState("");

  useEffect(() => {
    const buscarAssentos = () => {
      const promise = axios.get(
        `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
      );

      promise.then((response) => {
        setSeats(response.data);
      });

      promise.catch((error) => {
        setError("Erro ao carregar os assentos");
        console.log("Erro ao buscar assentos:");
        console.log(error.response?.data);
      });
    };

    if (sessionId) {
      buscarAssentos();
    }
  }, [sessionId]);


  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!seats || !seats.seats) {
    return <ErrorMessage>Carregando assentos...</ErrorMessage>;
  }

const handleSeatClick = (seat) => {
  if (!seat.isAvailable && !selectedSeats.includes(seat.id)) {
    setSelectedSeats([...selectedSeats, seat.id]);
  }
};

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        ← Voltar
      </BackButton>

      <Title>Selecione o(s) assento(s)</Title>
<SeatsGrid>
  {seats.seats.map((seat) => (
    <SeatButton
      key={seat.id}
      className={seat.isAvailable ? "available" : "unavailable"}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.name}
    </SeatButton>
  ))}
</SeatsGrid>
<FormSection>
  <InputContainer>
  <Label>Nome do comprador(a)</Label>
  <Input 
  placeholder="Digite seu nome"
  value={buyerName}
  onChange={(e) => setBuyerName(e.target.value)}/>
  </InputContainer>
  <InputContainer>
  <Label>CPF do comprador(a)</Label>
  <Input 
  placeholder="Digite seu CPF"
  value={buyerCPF}
  onChange={(e) => setBuyerCPF(e.target.value)}/>
  </InputContainer>
   <ReserveButton>
    Reservar assento(s)
  </ReserveButton>
</FormSection>
      <Sidebar />
    </Container>
  );
}

export default Seats;


