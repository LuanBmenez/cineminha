import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, ErrorMessage, FormSection, Input, InputContainer, Label, SeatButton, SeatsGrid, Sidebar, Title } from "./styles";
import { BackButton, EnterButton } from "../Buttons";

function Seats() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [buyerName, setBuyerName] = useState("");
  const [buyerCPF, setBuyerCPF] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    const buscarAssentos = async() => {
      try{
        setLoading(true);
        const {data} = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
        );
        
        setSeats(data);
      }catch(error){
        console.log(`Erro ao buscar assentos: ${error.response?.data || error.message}`);
      }
      finally {
        setLoading(false);
      }
    };
    buscarAssentos();
  }, [sessionId]);

  if (loading) {
    return <ErrorMessage>Carregando assentos...</ErrorMessage>;
  }
  
  if (!seats || !seats.seats) {
    return <ErrorMessage>Sessão não encontrada ou erro ao carregar assentos.</ErrorMessage>;
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

      // Enviando dados via state em vez de URL para não expor CPF
      navigate('/sucesso', { state: orderData });
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
        {seats.seats?.map((seat) => (
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
            maxLength={11}
          />
        </InputContainer>
        
        <EnterButton onClick={handleReservation}>
          Reservar assento(s)
        </EnterButton>
      </FormSection>
      
      <Sidebar />
    </Container>
  );
}

export default Seats;
