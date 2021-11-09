import './Partnership.css';
import jaskosdata from 'images/jaskoslogo.jpg';
import keb from  'images/keb.jpg';
import pcsrc from 'images/pcsrc.png';



 function Partnership() {

    return (
        <div className="partnership" style={{height:"2000px"}}>
            
            <div className="partnership__main">
            <div className="partnership__content">
                <h3>Strategic Partnership</h3>
            </div>
            <p>
            KOS Courier Limited is the most reliable and trusted delivery partner for nationwide delivery. We serve millions of buyers and suppliers nationwide. At KOS Courier, we continue to develop services in order to help businesses reach more clients and discover more opportunities. We are proud to work with the best service providers as Partners to help business move successfully. We work closely with our partners in every development stage to keep moving in the most efficient and cost-effective way.
Below is a list of our strategic partnership.

            </p>
            <div className="partnership__list_logo">
               <img style={{width:"300px"}} src={pcsrc} alt="" />
               <img src={jaskosdata} alt="" />
               <img src={keb} alt="" />
            </div>
             <h3 className="partnership__mainh3">Partnership Solutions & Services</h3>
             <ul>
                 <li>
                 	<span>E-commence: </span>As an e-commerce enabler, KOS Courier develops solutions to help its customers add features and functionality to their online stores to sell their products conveniently and facilities them to further grow their businesses. Our e-commence solution enables a smooth integration process between e‐commerce applications and KOS Courier systems.
                 </li>
                 <li>
                 	<span>Small Business Solution: </span>At KOS Courier, 
                 we believe in the importance of enabling and assisting entrepreneurs to
                  create their own opportunities, 
                 we therefore have a special package that caters for all SMEs with the aim to open doors for partnerships with more SMEs in the regions where we operate. Our SME package gives access to logistical services for development and growth, since SME’s often face challenges accessing competitive financing rates, finding customized solutions and connecting with local capacity and expertise related to this industry. KOS Courier Limited is in a position to provide valuable logistical services customized to suit SMEs’ needs.
                 </li>
             </ul>
             <p>Kindly fill this form for a partnership request.</p>
            </div>
            <div className="partnership__form">
                  <div className="partnership__form__input">
                     <div>
                         <p>Business Name</p>
                         <input type="text" />
                     </div>
                     <div>
                         <p>Location</p>
                         <input type="text" />
                     </div>
                  </div>
                  <div className="partnership__form__input">
                     <div>
                         <p>Fisrt Name*</p>
                         <input type="text" />
                     </div>
                     <div>
                         <p>Last Name*</p>
                         <input type="text" />
                     </div>
                  </div>
                  <div className="partnership__form__input">
                     <div>
                         <p>Business Activity*</p>
                         <input type="text" />
                     </div>
                     <div>
                         <p>Business Number*</p>
                         <input type="text" />
                     </div>
                  </div>
                  <div className="partnership__form__input">
                     <div>
                         <p>Address*</p>
                         <input type="text" />
                     </div>
                     <div>
                         <p>Telephone*</p>
                         <input type="text" />
                     </div>
                  </div>
                  
                  <div>
                      <p>Additional Details</p>
                  <textarea rows="4" cols="52"></textarea>
                  </div>
                   <button>Submit Request</button>
            </div>
        </div>
    )
}
export default Partnership;