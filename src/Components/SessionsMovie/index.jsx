import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "../Buttons";
import {Container, ErrorMessage, MovieInfo, MoviePoster, MovieDetails, MovieTitle, Title, DaysContainer, DayCard, DayInfo, Sidebar, ShowtimesContainer, ShowtimeButton} from "./styles";


function FilmeSessões() {
  const { idMovie } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getSessions = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`
        );

        setSession(data);
      } catch (error) {
        console.log(`Erro ao buscar sessões: ${error.response.data}`);
      } finally {
        setLoading(false);
      }
    };

    getSessions();
  }, [idMovie]);

  if (loading) {
    return <ErrorMessage>Carregando...</ErrorMessage>;
  }

  if (!session) {
    return <ErrorMessage>Nenhuma sessão encontrada</ErrorMessage>;
  }

  const { title, posterURL, overview, days } = session;

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>← Voltar</BackButton>

      <MovieInfo>
        <MoviePoster src={posterURL ?? undefined} alt={title} />
        <MovieDetails>
          <MovieTitle>{title ?? "Título do filme"}</MovieTitle>
          <p>{overview}</p>
        </MovieDetails>
      </MovieInfo>

      <Title>Selecione o horário</Title>

      <DaysContainer>
        {days?.map((day) => {
          const { id, weekday, date, showtimes } = day;

          return (
            <DayCard key={id}>
              <DayInfo>
                {weekday} - {date}
              </DayInfo>
              <Sidebar />
              <ShowtimesContainer>
                {showtimes?.map((showtime) => (
                  <ShowtimeButton
                    key={showtime.id}
                    onClick={() => navigate(`/assentos/${showtime.id}`)}
                  >
                    {showtime.name}
                  </ShowtimeButton>
                ))}
              </ShowtimesContainer>
            </DayCard>
          );
        })}
      </DaysContainer>
    </Container>
  );
}

export default FilmeSessões;
