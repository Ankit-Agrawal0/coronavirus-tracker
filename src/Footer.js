import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
    <div className="footerIcon">
   <a className="link" href="mailto:ankitagrawal160207@gmail.com" > <i class="foot fas fa-envelope"></i></a>     
   <a className="link" href="https://t.me/joinchat/-8YznogUThM1Njc1" ><i class="foot fas fa-paper-plane"></i></a>  
   <a className="link" href="https://github.com/Ankit-Agrawal0" ><i class="foot fab fa-github"></i></a>  
   <a className="link" ><i class="foot fab fa-instagram"></i></a>  
    </div>
    <span className="rights">All Rights Reaserved | Terms & Conditions</span><br />
    <span className="rights"><i class="far fa-copyright"></i>Ankit Agrawal</span><br />
    <span className="description">Made By Ankit Agrawal With ❤️</span>
    </div>
      );
}

export default Footer;