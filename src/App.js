import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import UnderNav from './components/UnderNav';
import SearchDiv from './components/SearchDiv';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ProfileNumbers from './components/ProfileNumbers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UnderNav />
      <SearchDiv />
      <Services />
      <Portfolio />
      <About />
      <ProfileNumbers />
      <Footer />
    </div>
  );
}

export default App;
