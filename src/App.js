import GlobalStyles from "./styles/Global";
import SnowEffect from "./Pages/Login/SnowEffect";
import LoginLogic from "./Pages/Login/LoginLogic";
import { ChildNameProvider } from './Pages/Home/Contexts/ChildNameContext';
import Home from "./Pages/Home/Home";
import Cartinha from "./Pages/Cartinha/Cartinha";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HistoriaNatal from "./Pages/HistoriaNatal/HistoriaNatal";
import JogoHome from './Pages/Jogos/JogoHome/Jogos';
import { Routes, Route } from "react-router-dom";
import JogoMemoria from "./Pages/Jogos/JogoMemoria/JogoMemoria";
import ArvoreInterativa from "./Pages/Jogos/ArvoreInterativa/ArvoreInterativa";
import QuizInterativo from "./Pages/Jogos/QuizInterativo/QuizInterativo";
import Layout from './components/Layout';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <SnowEffect />

      <ChildNameProvider>
        <Routes>
          {/* Login */}
          <Route path="/" element={<LoginLogic />} />

          {/* Home */}
          <Route path="/Home" element={
            <>
              <Home />
              <Footer />
            </>
          } />

          {/* Jogos */}
          <Route path="/Jogos" element={
            <Layout>
              <JogoHome />
            </Layout>
          } />
          <Route path="/Jogos/JogoMemoria" element={
            <Layout>
              <JogoMemoria />
            </Layout>
          } />
          <Route path="/Jogos/ArvoreInterativa" element={
            <Layout>
              <ArvoreInterativa />
            </Layout>
          } />
          <Route path="/Jogos/QuizInterativo" element={
            <Layout>
              <QuizInterativo />
            </Layout>
          } />
          {/* Cartinha */}
          <Route path="/Cartinha" element={
            <>
              <Header />
              <Cartinha />
              <Footer />
            </>
          } />
          {/* Historia de Natal */}
          <Route path="/HistoriaNatal" element={
            <>
              <Header />
              <HistoriaNatal />
              <Footer />
            </>
          } />
        </Routes>
      </ChildNameProvider>
    </>
  );
}

export default App;
