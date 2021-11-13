import React from 'react';
import './Header.css';

class Header extends React.Component {

  
  render(){
    return(
        <header>
        <div className="top-bar animate dropdown"></div>
        <div className="main-header">
            <div className="container">
                <h1 className="site-title">Конвертер валют</h1>
            </div>
        </div>
        <div className="header-nav">
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">Пункты обмена</a></li>
                        <li><a href="/about">О нас</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    );
  } 
}

export default Header;
