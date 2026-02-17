import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// GitHub Pages 404.html redirect handling
if (window.location.pathname.includes('?p=')) {
  const pathname = window.location.search
    .split('?p=')[1]
    .split('&q=')[0]
    .replace(/~and~/g, '&');
  const search = window.location.search
    .split('&q=')[1]
    ?.replace(/~and~/g, '&') || '';
  window.history.replaceState(null, null, '/' + pathname + (search ? '?' + search : ''));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
