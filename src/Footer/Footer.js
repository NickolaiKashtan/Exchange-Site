import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  
  render(){
    return(
        <footer id="footer" className="footer">
        <div className="footer-bottom">
            <div className="container">
                <div className="flex-container">
                    <div className="flex-item">
                        <h1 className="footer-title">
                            <a href="#">React app.</a>
                        </h1>
                        <p>All rights reserved</p>
                    </div>

                    <div className="flex-item">
                        <div className="module-body">
                            <ul className="list-unstyled">
                                <li><a href="/sitemap/" tooltip="Карта сайта" >Карта сайта</a></li>
                                <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap" >Google Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-item">
                        <div className="module-bpdy">
                            <ul className="list-unstyled">
                                <li><a href="/contact">Контакты</a></li>
                                <li><a href="/d">Гарантии</a></li>
                                <li><a href="/s">О сервисе</a></li>
                                <li><a href="/o">Условия возврата</a></li>
                                <li><a href="/p">Соглашение о использовании
                                сервиса</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    );
  } 
}

export default Footer;
