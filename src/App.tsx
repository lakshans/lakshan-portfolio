import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import TechPage from './pages/TechPage';
import ContactPage from './pages/ContactPage';
import PhotographyPage from './pages/PhotographyPage';
import TravelPage from './pages/TravelPage';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
