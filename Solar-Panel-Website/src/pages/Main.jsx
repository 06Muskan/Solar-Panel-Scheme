import React from 'react';
import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Main = () => {
  return (
    <div>
        <div className="header">
             <div className="heading">
               <img src = "/image11.png" alt = "Logo"  className="logo-image"  ></img>
               <img src="/HeadingImg2.webp" alt ="heading img" className="regular-image" ></img>
             </div>
            </div>
            <Navbar />
            <div className="image-text-container">
            <div className='div1'>
                <img src="/callingimg.jpeg" alt="calling-img" className="background-image "></img>
                <div className="overlay-text">
                    <h4>Call Us on TollFree</h4>
                    <h4 className="highlight-heading">15555</h4>
                </div>
             </div>
             <div className="div2">
                <h4 class="div-heading">Gallery</h4>
                <div class="image-wrapper">
                <img src="solar-panels-1.jpg" alt="Image 1" className="solarimg"></img>
                <img src="solar-panels-2.jpg" alt="Image 2"  className="solarimg" ></img>
                </div>
             </div>
             <div className="div3">
                <div className="steps-heading">
                <h3 className="procedure-heading main-heading">Step wise Procedure</h3>
                <h4 className="procedure-heading main-heading" >Step 1:</h4>
                <h4 className="procedure-heading sub-heading">Register in the Portal.</h4>
                <h4 className="procedure-heading main-heading">Step 2:</h4>
                <h4 className="procedure-heading sub-heading">Login with ID.</h4>
                <h4 className="procedure-heading main-heading">Step 3:</h4>
                <h4 className="procedure-heading sub-heading">Get Approvals.</h4>
                </div>
             </div>
            </div>
            <div className="content-img">
                <img src="/contentImg.jpeg" alt="img" className="contentimg"></img>
            </div>
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

export default Main