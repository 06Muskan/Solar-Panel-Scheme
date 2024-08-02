import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
    return(
        <div>
         <Header />
         <Navbar/>  
            <div className="signup-container">
               <div className="signup-heading">
                  <h4>Signup to create an account</h4>
               </div>    
                
                
                <div className="login-prompt">
                  <p>
                    Already have an account? <strong>Login</strong>
                  </p>
                </div>
                <div className="placeholder-part">
                   <input type="email" placeholder="username or email address"></input>
                   <input type="password" placeholder="Password"></input>
                </div>
                <div className="confirm-part">
                  {/* <i ></i> */}
                  <input type='checkbox'></input>
                  <p>I would like to receive the latest news about solar panels</p>
                </div>
                <button className="signup-button">Signup</button>
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
    );
}
    
    




export default Login;