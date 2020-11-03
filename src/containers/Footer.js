import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';


function Footer() {
     return(
         <div className="footer">
             <div className="footer__bar"></div>
             <div className="footer__container">
                 <div className="footer__info">
                     <div className="footer__infoText">
                         <span className="footer__Text">about kos courier</span>
                         <span className="footer__Text">partnerships</span>
                         <span className="footer__Text">careers</span>
                         <span className="footer__Text">contact us</span>
                     </div>
                     <div className="footer__agencies">
                          <span className="footer__agenciesText">shop by country</span>
                     <div className="footer__infoFlag">
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/lebanon.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/usa.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/nigeria.png')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/singapore.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/mauritus.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/emirate.png')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/holland.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/turkey.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/usa.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/lebanon.jpg')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/nigeria.png')}/>
                        <img className="footer__flag" alt="product__logo" src={require('../assets/images/emirate.png')}/>
                     </div>
                     </div>
                 </div>
                 <div className="footer__contact">
                   <div className="footer__social">
                             <FacebookIcon />
                             <InstagramIcon />
                             <TwitterIcon />
                  </div>  
                   <div className="footer__contactInfo">
                       <span className="footer__contactText">+233(0) 507 036 618 | +233(0) 243 444 862 | +233(0) 303 217 108</span>
                       <span className="footer__contactText">Tema Community 12 Thirdes Road and Spintex Road, Ghana</span>
                       <span className="footer__contactText">sales@koscourier.com</span>
                   </div>     

                 </div>
                 <div className="footer__copyright">
                     <span className="footer__copyrightText">Copyright Jaskos Data Ltd 2020</span>
                 </div>
             </div>
         </div>
     )
}

export default Footer;