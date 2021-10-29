import './Footer.css';
import pcsrc from '../../images/pcsrc.png';

 function Footer() {
    return (
        <>
          <div className="footer">
           <div className="footer__left">
              <div className="footer__item">
                  <h3>About</h3>
                  <div className="footer__spacing"></div>
                  <p>About Koscourier</p>
                  <p>Partnerships</p>
                  <p>Delivery Services</p>
                  <p>Custom Pick</p>
                  
              </div>
              <div className="footer__item">
                  <h3>Contact</h3>
                  <div className="footer__spacing"></div>
                  <p>Telephone: +233 249855932</p>
                  <p>Address: Alfred Adejetey Street</p>
                  <p>Email: info@koscourier.com </p>
              </div>
              <div className="footer__item">
                  <h3>Legal</h3>
                  <div className="footer__spacing"></div>
                  <p>Terms of Use</p>
                  <p>Security</p>
                  <p>Privacy Policy</p>
      
              </div>
              <div className="footer__item">
                  <h3>Connect</h3>
                  <div className="footer__spacing"></div>
                  <p>Customer Support</p>
                  <p>Careers</p>
              </div>
           </div>
           {/* <div className="footer__right">
                <h3>Social Media</h3>
           </div> */}
      </div>
         <div className="header__licensed">
             
            <img className="licensed__logo" src={pcsrc} alt="" />
         </div>
        </>
    )
}

export default Footer;
