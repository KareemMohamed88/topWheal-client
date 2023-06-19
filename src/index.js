import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Router>
      <App />
      <div
        className="bg-indigo-300"
        style={{
          width: "100%",
          height: "10px",
        }}
      ></div>
    </Router>
    </HelmetProvider>
  </React.StrictMode>
);
