import React from 'react';
import DesktopHome from './home/DesktopHome';
import MobileHome from './home/MobileHome';

// Separate presentations share the same content model and URLs.
const Home: React.FC = () => (
  <section className="section home-section">
    <div className="desktop-presentation"><DesktopHome /></div>
    <div className="mobile-presentation"><MobileHome /></div>
  </section>
);

export default Home;
