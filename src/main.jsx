import React from 'react';
import ReactDOM from 'react-dom/client';
// Estilos globais primeiro; o CSS de cada componente vem depois e pode sobrescrevê-los
import './styles/tokens.css';
import './style.css';
import './styles/base.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
