// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';
import ScoreboardPage from './pages/ScoreboardPage';
import './styles/Game.css'; 

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/scoreboard" Component={ScoreboardPage} />
      <Route path="/" Component={GamePage} />
    </Routes>
  </Router>
);

export default App;


