import './Home.css';

import { 
 useHistory
} from 'react-router-dom';
import Category from 'components/category/Category';
import RatingCheck from 'components/ratingcheck/RatingCheck';
import DeliveryItem from 'components/deliveryitem/DeliveryItem';
import DriverSearch from 'components/driversearch/DriverSearch';

//  import banner1 from 'images/banner1.jpg';
 import banner2 from 'images/banner2.jpg';
import banner3 from 'images/banner3.jpg';
// import banners from 'images/banners.jpg';



function Home() {
  const history = useHistory();
   const handler = () => {
      console.log('user created');
   }

  //  <img className="banner" src={banner} alt="" />

  return (
    <div className="home" >
       <div className="banner__container">
         <img className="banner" src={banner3} alt=""/>
         <div>          
           <h2 className="banner__toph2">Your</h2>
          <h2 className="banner__toph3" >Nationwide</h2>
          <h2 className="banner__h2">Delivery</h2>
          <h2 className="banner__toph4">Partner</h2>
          <button className="banner__button" onClick={()=>history.push('/signup')}>Sign Up</button>
          </div>
         <div className="banner__flexible">  
           <h2>Flexible Payment To </h2>
           <h2> Own A Bike</h2>   
           <p className="ride">Ride-To-Own</p>     
           {/* <h2 className="banner__tophl2">Flexible</h2>
          <h2 className="banner__tophl3" >Payment</h2>
          <h2 className="banner__hl2">To Own A</h2>
          <h2 className="banner__tophl4">Bike</h2>
          <h2 className="banner__tophl5">Right-To-Own</h2> */}
          </div>
          <button className="banner__buttonl" onClick={()=>history.push('/partnership')}>Start Riding</button>
       </div>
      <div className="category__container">
        {/* <Category 
        label="Search Driver" 
        title="Quick Driver/Rider Search" 
        subtitle="Search for drivers in your locality." 
        buttonHandler={handler}>
        <DriverSearch />
        </Category> */}
        <Category 
        label="Check Rate" 
        title="Quick Driver/Rider Search" 
        subtitle="earch for drivers in your locality." 
        buttonHandler={handler}>
         <RatingCheck />
        </Category>
        <Category 
        label="Sign Up" 
        title="Manage Delivery" 
        subtitle="Sign up to manage all your shipments easily." 
        buttonHandler={handler}>
         <DeliveryItem />
        </Category>
      </div>
      {/* <div className="footer">
           <div className="footer__left">
              <div className="footer__item">
                  <h3>About</h3>
                  <div className="footer__spacing"></div>
                  <p>About Koscourier</p>
                  <p>Investor Relations</p>
                  <p>Delivery Good</p>
                  <p>Franchise</p>
                  <p>Certifications</p>
              </div>
              <div className="footer__item">
                  <h3>Developer's Center</h3>
                  <div className="footer__spacing"></div>
                  <p>Developer's Forum</p>
                  <p>Koscourier APIs</p>
              </div>
              <div className="footer__item">
                  <h3>Legal</h3>
                  <div className="footer__spacing"></div>
                  <p>Terms of Use</p>
                  <p>Fraud Prevention</p>
                  <p>Privacy Policy</p>
      
              </div>
              <div className="footer__item">
                  <h3>Connect</h3>
                  <div className="footer__spacing"></div>
                  <p>Customer Support</p>
                  <p>Careers</p>
              </div>
           </div>

      </div> */}
    </div>
  );
}

export default Home;
