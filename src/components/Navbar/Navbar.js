import React, { Component } from 'react';
import {MenuItems} from './MenuItems.js';
import './Navbar.css';
import Connection from '../Connection/Connection.js';
import Logo from '../../fontsAndIcons/logo.png';
import Bars from '../../fontsAndIcons/bars-solid.svg';
import Close from '../../fontsAndIcons/times-solid.svg';

class Navbar extends Component {
    
    state = {
        clicked: false,
    }
    
    render() {
        const handleClick = () => {
            this.setState({clicked: !this.state.clicked})
        }
        return(
            <>
            <Connection/>
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> <img className="Logo" src={Logo} alt="logo"></img></h1>
                <ul className={ this.state.clicked ? 'nav-menu active' :'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <img className="menu-icon" onClick={handleClick} src={this.state.clicked ? Close : Bars} alt="sidebar"></img>
            </nav>
            </>
        )
    }
}

export default Navbar;