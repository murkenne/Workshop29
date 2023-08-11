import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom' directly
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // Use createRoot directly without ReactDOM
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
