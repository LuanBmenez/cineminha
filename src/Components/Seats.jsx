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
  
  &.selected {
    background-color: #FADBC5;
    border: 2px solid #EE897F;
    color: #000;
  }
  
  &.unavailable {
    background-color: #2B2D36;
    border: 1px solid #2B2D36;
    color: #2B2D36;
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
  color: #FFFFFF;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #FFFFFF;
  border-radius: 3px;
  font-size: 18px;
`;

const ReserveButton = styled.button`
  background-color: #EE897F;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
  padding: 14px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #EE897F;
  }
`;

function Seats() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
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
        console.log("Erro ao buscar assentos:");
        console.log(error.response?.data);
      });
    };
    buscarAssentos();
  }, [sessionId]);

  if (!seats || !seats.seats) {
    return <ErrorMessage>Carregando assentos...</ErrorMessage>;
  }

  const handleSeatClick = (seat) => {
    if (!seat.isAvailable) return; 
    
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  const handleReservation = () => {
    // Validações
    if (selectedSeats.length === 0) {
      alert("Por favor, selecione pelo menos um assento!");
      return;
    }
    
    if (!buyerName.trim()) {
      alert("Por favor, digite o nome do comprador!");
      return;
    }
    
    if (!buyerCPF.trim()) {
      alert("Por favor, digite o CPF do comprador!");
      return;
    }

    
    const CPFNumbers = buyerCPF.replace(/[^0-9]/g, '');
    if (CPFNumbers.length !== 11) {
      alert("CPF deve ter exatamente 11 números!");
      return;
    }

    
    const reservationData = {
      ids: selectedSeats,
      name: buyerName,
      cpf: CPFNumbers 
    };

    
    const promise = axios.post(
      'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many',
      reservationData
    );

    promise.then((response) => {
      console.log("Reserva realizada com sucesso:", response.data);
      
  
      const selectedSeatNames = seats.seats
        .filter(seat => selectedSeats.includes(seat.id))
        .map(seat => seat.name);

     
      const orderData = {
        movieTitle: seats.movie.title,
        weekday: seats.day.weekday,
        date: seats.day.date,
        time: seats.name,
        seats: selectedSeatNames,
        buyerName: buyerName,
        buyerCPF: buyerCPF
      };

      // Navega para a tela final enviando os dados via URL
      const params = new URLSearchParams({
        movieTitle: orderData.movieTitle,
        weekday: orderData.weekday,
        date: orderData.date,
        time: orderData.time,
        seats: orderData.seats.join(','),
        buyerName: orderData.buyerName,
        buyerCPF: orderData.buyerCPF
      });
      
      navigate(`/sucesso?${params.toString()}`);
    });

    promise.catch((error) => {
      console.error("Erro ao realizar reserva:", error.response?.data);
      alert("Erro ao realizar a reserva. Tente novamente!");
    });
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
            className={
              !seat.isAvailable 
                ? "unavailable" 
                : selectedSeats.includes(seat.id)
                ? "selected"
                : "available"
            }
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
            onChange={(e) => setBuyerName(e.target.value)}
          />
        </InputContainer>
        
        <InputContainer>
          <Label>CPF do comprador(a)</Label>
          <Input 
            placeholder="Digite seu CPF"
            value={buyerCPF}
            onChange={(e) => setBuyerCPF(e.target.value)}
          />
        </InputContainer>
        
        <ReserveButton onClick={handleReservation}>
          Reservar assento(s)
        </ReserveButton>
      </FormSection>
      
      <Sidebar />
    </Container>
  );
}

export default Seats;


