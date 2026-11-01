// PROTOTYPE — Three visual systems, switchable via ?variant=A|B|C and ?view=home|case-study.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioVisualPrototype from './PortfolioVisualPrototype';
import './prototype.css';

createRoot(document.getElementById('prototype-root')!).render(
  <StrictMode>
    <PortfolioVisualPrototype />
  </StrictMode>,
);
