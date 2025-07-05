import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #212226;
  width: 100%;
  min-height: calc(100vh - 67px);
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  color: #9DB899;
  font-family: "Sarala", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const InfoSection = styled.div`
  margin-bottom: 40px;
`;

export const InfoBox = styled.div`
  background-color: #2B2D36;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h3`
  color: #EE897F;
  font-family: "Sarala", sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  border-bottom: 1px solid #4E5A65;
  padding-bottom: 8px;
`;

export const InfoText = styled.p`
  color: #ffffff;
  font-family: "Sarala", sans-serif;
  font-size: 20px;
  margin: 8px 0;
  font-weight: 400;
`;
