import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContent from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <AppContent>
      <App />
    </AppContent>
    
);
reportWebVitals();
