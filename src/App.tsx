import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 