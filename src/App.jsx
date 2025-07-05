import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Catalog from "./Components/Catalog/index.jsx";
import Final from "./Components/Final/index.jsx";
import Header from "./Components/Header";
import SessionsMovie from "./Components/SessionsMovie/index.jsx";
import Seats from "./Components/Seats/index.jsx";
import GlobalStyle from "./styles/global.jsx";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/sessoes/:idMovie" element={<SessionsMovie />} />
          <Route path="/assentos/:sessionId" element={<Seats />} />
          <Route path="/sucesso" element={<Final />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
