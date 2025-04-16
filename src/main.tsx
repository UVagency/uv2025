import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { initCustomCursor } from './lib/customCursor';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

// Initialize custom cursor
if (typeof window !== 'undefined') {
  // Try to initialize as early as possible
  initCustomCursor();
  
  // Also initialize on DOM content loaded as a fallback
  window.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
  });
  
  // Final fallback on full load
  window.addEventListener('load', () => {
    initCustomCursor();
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
