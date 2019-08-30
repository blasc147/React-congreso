import React from 'react';
import navImg from './images/hospitalitaliano.png'
import './styles/navbar.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    render() {
        return (
            <header id="header" className="default-header colored flat-menu">

                <div className="container">
                    <div className="logo">
                        <a href="#">
                            <img className="imgNavBar" alt="Universh" data-sticky-width="150" data-sticky-height="28" src={navImg} />
                        </a>
                    </div>
                </div>
            <div className="navbar-collapse mi-menu" >
                <div className="container">
                    <nav className="nav-main mega-menu">
                        <ul className="nav nav-pills nav-main" id="mainMenu">
                            <li className="mega-menu-item mega-menu-fullwidth mega-menu-halfwidth">
                                <a className="dropdown-toggle" href="#">
                                    Home
                                    <i className="fa fa-caret-down"></i>						
                                    </a>
                            
                            </li>
                            <li className="mega-menu-item mega-menu-fullwidth mega-menu-halfwidth">
                                <Link to="/cursos">
                                    Cursos						
                                    </Link>
                            
                            </li>
                            <li className="mega-menu-item mega-menu-fullwidth mega-menu-halfwidth">
                                <a href="#">
                                    Disertantes						
                                    </a>
                            
                            </li>
                            <li className="mega-menu-item mega-menu-fullwidth mega-menu-halfwidth">
                                <a href="#">
                                    Cronograma						
                                    </a>
                            
                            </li>
                            <li className="dropdown mega-menu-item mega-menu-fullwidth mega-menu-halfwidth">
                                <a href="#">
                                    Contacto						
                                    </a>
                            
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                </div>
            </header>
        );
      }
    
}

export default NavBar;