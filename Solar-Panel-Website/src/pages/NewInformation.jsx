import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import "./NewInformation.css";

const Newinformation = () => {
  return (
    <div>
        <Header />
        <Navbar/>
       <ol className="styled-list">
        <li>
          Amendment to the Scheme for Flexibility in Generation and Scheduling of Thermal/Hydro Power Stations through bundling with Renewable Energy and Storage Power dated 12th April 2022 Deletion of Paras 9.2 and 9.4.3 -reg.
        </li>
        <li>
          Administrative approval for implementation of Biogas Programme under the Umbrella scheme of National Bio Energy Programme for FY 2021-22 to 2025-26 (Phase-I) regarding.
        </li>
        <li>
          Extension of Phase-II of Grid Connected Rooftop Solar programme.
        </li>
        <li>
          Scheme for Solarisation of sun-temple town of Modhera, District – Mehsana, Gujrat.
        </li>
        <li>
          Administrative approval for implementation of Biomass Programme under the Umbrella scheme of National Bioenergy Programme for duration of FY 2021-22 to 2025-26 (Phase-I)- Reg.
        </li>
        <li>
          Carbon Credit Trading Scheme, 2023.
        </li>
      </ol>
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

export default Newinformation;