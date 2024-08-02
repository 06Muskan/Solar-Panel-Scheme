import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import "./Financing.css";

const Financing = () => {
  return (
    <div>
    <Header />
    <Navbar/>
    <ul className="bullet-list">
        <li> SBI and Associates</li>
        <li>Nationalised Banks</li>
        <li>Private Sector Banks-Indian Banks</li>
        <li>Private Sector Banks-Foreign Banks</li>
        <li>Scheduled State Co-operative Banks</li>
        <li>Non-Scheduled State Co-operative Banks</li>
        <li>Co-operative Banks - Scheduled Urban Coopertive Banks</li>
        <li>Co-operative Banks - State Cooperative Banks</li>
        <li>Co-operative Banks - District Cooperative Banks</li>
        <li>Regional Rural Banks</li>
        <li>Websites of Banks in India</li>
    </ul>
    <footer class="footer1">
          <div class="footer-links">
            <a href="terms.html">Terms & Conditions</a>
            <span>|</span>
            <a href="copyright.html">Copyright Policy</a>
            <span>|</span>
            <a href="privacy.html">Privacy Policy</a>
            <span>|</span>
            <a href="hyperlinking.html">Hyperlinking Policy</a>
          </div>
        </footer>
        <footer class="footer2">
           <div class="footer-content">
              <p> copyright &copy; 2024</p>
              <p>Website Content Management By Script Squad</p>
              <p>Last updated - 29/July/2024</p>
              <p className="highlight-red">Total Hits: 19586344</p>
            </div>
        </footer>
</div>
  )
}

export default Financing

