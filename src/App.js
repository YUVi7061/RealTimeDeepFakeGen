import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DeepfakeApp from './components/DeepfakeApp';
import { CssBaseline } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deepfake" element={<DeepfakeApp />} />
      </Routes>
    </Router>
  );
};

export default App;
