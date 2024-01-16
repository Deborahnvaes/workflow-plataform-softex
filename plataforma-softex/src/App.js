// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './components/Login/LoginForm';
import TelaInicial from './components/tela-inicial/Inicial.jsx'
import Perfil from './components/perfil/Perfil.jsx'
import Faltas from './components/pagina-faltas/faltas.jsx'
import Ranking from './components/ranking/ranking.jsx'
import EnviarEmail from './components/redefinirSenha/lembrar_senha/esqueceu-senha.jsx'
import RedefinirSenha from './components/redefinirSenha/redefinir_senha/redefinindo-senha.jsx'

const App = () => {
  return (
    <>
    <main>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/tela-inicial" element={<TelaInicial/>} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/enviar-email" element={<EnviarEmail />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      </Routes>
    </Router>
    </main>
    
    </>
  );
}

export default App;
