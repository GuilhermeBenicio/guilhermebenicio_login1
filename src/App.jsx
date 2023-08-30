import React from 'react';
import logotipo from './assets/logotipo.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="logotipo">
        <img src={logotipo} alt="" />
      </div>
      <div className="conteudo">
        <p className="description">
          Selecione seu perfil abaixo para acessar sua conta:
        </p>
        <div className="botoes">
          <button className="btnResponsavel">Responsável</button>
          <button className="btnProfissional">Profissional</button>
        </div>
      </div>
    </div>
  );
}

export default App;
