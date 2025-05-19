import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InfoCard from './components/Infocard';
import Reviews from './components/Review';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Global smooth scroll style */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <Navbar />
      <main className="pt-20"> {/* To offset fixed Navbar */}
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="info">
          <InfoCard />
        </section>
        <section id="review">
          <Reviews />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
