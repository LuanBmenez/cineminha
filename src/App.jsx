import Principal from "./Components/Header";
import Catalogo from "./Components/Catalog";
import FilmeSessões from "./Components/SessionsMovie";
import Seats from "./Components/Seats"
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Principal />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/sessoes/:idMovie" element={<FilmeSessões />} />
          <Route path="/assentos/:sessionId" element={<Seats />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
