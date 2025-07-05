import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: Sarala, sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const MovieCard = styled.div`
  width: 145px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 209px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;
