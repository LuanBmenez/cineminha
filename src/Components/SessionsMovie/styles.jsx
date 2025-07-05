import styled from "styled-components";


export const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #2d2f36;
  border-radius: 8px;
`;

export const MoviePoster = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const MovieDetails = styled.div`
  color: #ffffff;
  font-family: "Sarala", sans-serif;
`;

export const MovieTitle = styled.h1`
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DayCard = styled.div`
  font-family: "Sarala", sans-serif;
  background-color: #2d2f36;
  border-radius: 8px;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 99%;
  height: 3px;
  border: 1px solid #4e5a65;
  background-color: #4e5a65;
  margin: 15px 0;
`;

export const DayInfo = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ShowtimesContainer = styled.div`
  display: flex;
  font-family: "Sarala", sans-serif;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ShowtimeButton = styled.button`
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

export const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 18px;
  padding: 40px;
`;
