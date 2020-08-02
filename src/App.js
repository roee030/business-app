import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<Services />
		</div>
	);
}

export default App;
