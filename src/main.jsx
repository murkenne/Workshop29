import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
