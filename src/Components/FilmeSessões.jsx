import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #2d2f36;
  border-radius: 8px;
`;

const MoviePoster = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

const MovieDetails = styled.div`
  color: #ffffff;
  font-family: "Sarala", sans-serif;
`;

const MovieTitle = styled.h1`
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DayCard = styled.div`
  font-family: "Sarala", sans-serif;
  background-color: #2d2f36;
  border-radius: 8px;
  padding: 20px;
`;

const DayInfo = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ShowtimesContainer = styled.div`
  display: flex;
  font-family: "Sarala", sans-serif;
  gap: 15px;
  flex-wrap: wrap;
`;

const ShowtimeButton = styled.button`
  background-color: #ee897f;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e67c70;
    transform: scale(1.05);
  }
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
    background-color: #2f5233;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  padding: 40px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 18px;
  padding: 40px;
`;

function FilmeSessões() {
  const { filmeId } = useParams();
  const navigate = useNavigate();
  const [sessoes, setSessoes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarSessoes = () => {
      setLoading(true);
      const promise = axios.get(
        `https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`
      );

      promise.then((response) => {
        setSessoes(response.data);
        setLoading(false);
      });

      promise.catch((error) => {
        setError("Erro ao carregar as sessões");
        setLoading(false);
        console.log(error.response?.data);
      });
    };

    buscarSessoes();
  }, [filmeId]);

  if (loading) {
    return <LoadingMessage>Carregando sessões...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!sessoes) {
    return <ErrorMessage>Nenhuma sessão encontrada</ErrorMessage>;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>← Voltar</BackButton>

      <MovieInfo>
        <MoviePoster src={sessoes.posterURL} alt={sessoes.title} />
        <MovieDetails>
          <MovieTitle>{sessoes.title}</MovieTitle>
          <p>{sessoes.overview}</p>
        </MovieDetails>
      </MovieInfo>

      <Title>Selecione o horário</Title>

      <DaysContainer>
        {sessoes.days.map((day) => (
          <DayCard key={day.id}>
            <DayInfo>
              {day.weekday} - {day.date}
            </DayInfo>
            <ShowtimesContainer>
              {day.showtimes.map((showtime) => (
                <ShowtimeButton
                  key={showtime.id}
                  onClick={() =>
                    console.log(
                      `Sessão selecionada: ${day.date} às ${showtime.name}`
                    )
                  }
                >
                  {showtime.name}
                </ShowtimeButton>
              ))}
            </ShowtimesContainer>
          </DayCard>
        ))}
      </DaysContainer>
    </Container>
  );
}

export default FilmeSessões;
