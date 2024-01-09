// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './components/Login/LoginForm';
import TelaInicial from './components/tela-inicial/Inicial.jsx'
import Perfil from './components/perfil/Perfil.jsx'
import Faltas from './components/pagina-faltas/faltas.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/tela-inicial" element={<TelaInicial/>} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/faltas" element={<Faltas />} />
      </Routes>
    </Router>
  );
}

export default App;
