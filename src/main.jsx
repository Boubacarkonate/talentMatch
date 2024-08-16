import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../src/pages/Home/App.jsx';
import Survey from '../src/pages/Survey.jsx';
import '../style/index.css';
import Header from './components/Header/Header.jsx';
import ClientForm from './components/Header/ClientForm.jsx';
import FreeLanceForm from './components/Header/FreeLanceForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/clientForm" element={<ClientForm />} />
        <Route path="/freelance" element={<FreeLanceForm />} />
      </Routes>
    </Router>
  </StrictMode>,
);
