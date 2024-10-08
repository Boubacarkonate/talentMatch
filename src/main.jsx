import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../src/pages/Home/App.jsx';
import '../style/index.css';
import Header from './components/Header/index.jsx';
import Error from './components/Error/index.jsx';
import Survey from './pages/Survey/index.jsx';
import Results from './pages/Results/index.jsx';
import FreeLances from './pages/Freelances/index.jsx';
import { SurveyProvider, ThemeProvider } from './utils/context/index.jsx';
import GlobalStyle from './utils/style/GlobalStyle.jsx';
import Footer from './components/Footer/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            {/* <Route path="/clientForm" element={<ClientForm />} />
            <Route path="/freelance" element={<FreeLanceForm />} /> */}
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<FreeLances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>,
);
