import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImage from "../assets/IconCine.png";

const Container = styled.div`
  width: 100%;
  height: 67px;
  background-color: #ee897f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Title = styled.h1`
  color: #fadbc5;
  font-size: 2rem;
  margin: 0;
  width: 326;
  height: 65;
  font-family: Raleway;
  font-weight: 600;
  font-size: 34px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderLink to="/">
        <Logo src={logoImage} alt="Logo Cineflex" />
        <Title>Cineflex</Title>
      </HeaderLink>
    </Container>
  );
};

export default Header;
