import React from 'react'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-cols">
        <div className="footer-title">
          <h1>TreeFund</h1>
        </div>

        <div className="footer-visit">
          <h3>Visit</h3>
          <p>IOS Office, No. 345</p>
          <p>Paseo Andares, #456</p>
          <p>Zapopan, Jalisco</p>
          <p>Mexico</p>
        </div>

        <div className="footer-follow">
          <h3>Follow</h3>
          <p>TreeFundX</p>
          <p>TreeFundFB</p>
          <p>TreeFund@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
