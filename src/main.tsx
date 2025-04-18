import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initScrollReveal } from './utils/scrollReveal.ts';

// Component to initialize scroll animations
const AppWithEffects = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithEffects />
  </StrictMode>
);