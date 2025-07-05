import axios from "axios";
import { useEffect, useState } from "react";
import {
  Title,
  Container,
  MovieCard,
  MovieLink,
  MoviePoster,
  MoviesGrid,
} from "./styles";

function Catalogo() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        );

        setFilmes(response.data);
      } catch (error) {
        console.error("Erro ao buscar os filmes:", error.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title>Em Cartaz</Title>
      <MoviesGrid>
        {filmes.map((filme) => (
          <MovieLink key={filme.id} to={`/sessoes/${filme.id}`}>
            <MovieCard>
              <MoviePoster src={filme.posterURL} alt={filme.title} />
            </MovieCard>
          </MovieLink>
        ))}
      </MoviesGrid>
    </Container>
  );
}

export default Catalogo;
