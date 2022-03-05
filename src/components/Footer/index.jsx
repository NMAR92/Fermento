import "./footer.scss";
import React from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';




function Footer() {

return (

    <footer className="footer">
      <div className="footer_social">
        <div className="icon">
         <SocialIcon url="https://twitter.com" bgColor="rgb(255, 255, 255)" style={{ height: 25, width: 25 }} />
        </div>
        <div className="icon">
         <SocialIcon url="https://linkedin.com" bgColor="rgb(255, 255, 255)" style={{ height: 25, width: 25 }}/>
        </div>
        <div className="icon">
         <SocialIcon url="https://facebook.com/" bgColor="rgb(255, 255, 255)" style={{ height: 25, width: 25 }}/>
        </div>
        <div className="icon">
         <SocialIcon url="https://instagram.com/" bgColor="rgb(255, 255, 255)" style={{ height: 25, width: 25 }}/>
        </div>
        <div className="icon">
         <SocialIcon url="https://www.github.com" bgColor="rgb(255, 255, 255)" style={{ height: 25, width: 25 }}/>
        </div>
        <div className="icon">
         <SocialIcon url="https://www.example.com" label="Fermentos" bgColor="rgb(255, 255, 255)" style={{ height: 25, width: 25 }} />
        </div>
      </div>  
    </footer>

);
  };

export default Footer;