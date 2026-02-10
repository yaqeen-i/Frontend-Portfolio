// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'; // Import the new main page
import Terminal from './pages/Terminal';
import InterstellarPortfolio from './pages/interstellarPortfolio'; 
import SpotlightPortfolio from './pages/SpotlightPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Hub is now the default page */}
        <Route path="/" element={<MainPage />} />
        
        {/* The 3 Modes */}
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/interstellar" element={<InterstellarPortfolio />} />
        <Route path="/spotlight" element={<SpotlightPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;