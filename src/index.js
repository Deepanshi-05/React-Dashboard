import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 React 18 style
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';






// 👇 Create root using React 18's method
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
