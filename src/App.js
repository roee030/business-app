import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
import Footer from './components/Contact-section/Contact.js';
function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Services />
			<About />
			<Footer />
		</div>
	);
}

export default App;
