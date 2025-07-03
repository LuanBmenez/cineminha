import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: Sarala, sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const MovieCard = styled.div`
  width: 145px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 209px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

function Catalogo() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promisse.then((Response) => setFilmes(Response.data));
    promisse.catch((error) => console.log(error.response.data));
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
