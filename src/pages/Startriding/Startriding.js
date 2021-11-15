import './Startriding.css';
import workandpay from 'images/workandpay.pdf'




 function Startriding() {

    return (
        <div className="partnership" style={{height:"2000px"}}>
            
            <div className="partnership__main">
            <div className="partnership__content">
                <h3>RIDE-TO-OWN</h3>
            </div>
            <p>
            Subscribe to our “Ride-to-own” package and own a motorbike between 12 to 24 months. This is a spread payment scheme that offers individuals, riders and drivers to work and own a vehicle whiles paying back within a stated period of time. The package comes with a brand new motorbike or tricycle van, insurance, delivery box, DVLA registration and offers you ready delivery jobs on our Smart Courier System to cover for your payment.
Join us to serve Ghana as we are the preferred Nationwide delivery partner.


            </p>
            <br />
             <p>Kindly follow the steps to get started.</p>
             <br />

             <ul>
                 <li>Download and fill the forms with a pen.</li>
                 <li>Attach 1 copy of your passport picture to the forms.</li>
                 <li>Attach a copy of your utility bills ( 3 ECG Prepaid receipts, last 3 Water bill) or tenancy agreement.</li>
                 <li>Come along with the above documents (1,2,3) and original ID Card.</li>
                 <li>Come along with one guarantor and guarantor particulars.</li>
                 <li>Come along with a down payment of GH₵1,000.00.</li>
             </ul>
              <div className="download" >
              <a href={workandpay} download="kos form">Download form</a>
              </div>
            </div>
           
        </div>
    )
}
export default Startriding;