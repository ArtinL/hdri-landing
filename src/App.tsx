import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Technical from './pages/Technical';
import Team from './pages/Team';
import DefaultPage from './pages/DefaultPage';
import Quickstart from './pages/quickstart';
import VisualElements from './pages/visualelements';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="technical" element={<Technical />} />
          <Route path="team" element={<Team />} />
          <Route path="quickstart" element={<Quickstart />} />
          <Route path="visualelements" element={<VisualElements/>} />
        </Route>
      </Routes>
    </Router>
  );
}
