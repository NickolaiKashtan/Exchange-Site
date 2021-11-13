import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends React.Component {

  //*constructor(props){
  //  super(props);
  //}
  render(){
    return(
      <div>
        <Header></Header>

    <div className="container">
        <main>
            <Router>
                <Routes>
                  <Route exact path="/" element={<Rate/>}/>
                  <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
            
        </main>
    </div>

    <div id="cookie-info" className="container">
        <div className="site-content">
            <div className="well">На нашем сайте мы используем куки для сбора информации 
                технического характрера. <br/>В частности, для персонифицированной работы сайта мы  обрабатываем IP-адрес
            региона вашего местоположения. <a href="#" className="btn btn-primary btn-sm">OK</a></div>
        </div>
    </div>

    <Footer></Footer>
      </div>
    );
  } 
}

export default App;
