import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componente/layout/Navbar';
import Home from './pages/Home';
import Vagas from './pages/Vagas';
import Cadastro from './pages/Cadastro';
import Container from './componente/layout/Container';
import Footer from './componente/layout/Footer';
import Login from './pages/Login';
import './App.css'

function App() {
  return (
    <Router>

      <Navbar />
      <Container customClass="min-height">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/vagas" element={<Vagas />} />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />


    </Router>
  );
}

export default App;
