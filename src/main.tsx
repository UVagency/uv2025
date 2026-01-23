import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './lib/i18n'; // Initialize i18n
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

// Suppress development tool errors in production
if (import.meta.env.PROD) {
  const originalError = console.error;
  console.error = (...args) => {
    const message = args[0]?.toString() || '';

    // Filter out browser extension and development tool errors
    if (
      message.includes('WebSocket connection to') ||
      message.includes('inject.bundle.js') ||
      message.includes('localhost:8098') ||
      message.includes('message port closed before a response was received')
    ) {
      return; // Suppress these errors
    }

    // Log all other errors normally
    originalError.apply(console, args);
  };
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
