import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
import Footer from './components/Contact-section/Contact.js';
import ConnectionNavbar from './components/Connection/Connection.js';
function App() {
	return (
		<div className="App">
			<ConnectionNavbar />
			<Navbar />
			<Hero />
			<Services />
			<About />
			<Footer />
		</div>
	);
}

export default App;
