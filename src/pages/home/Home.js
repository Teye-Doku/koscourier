import './Home.css';

import { 
 useHistory
} from 'react-router-dom';
import Category from 'components/category/Category';
import RatingCheck from 'components/ratingcheck/RatingCheck';
import DeliveryItem from 'components/deliveryitem/DeliveryItem';
import DriverSearch from 'components/driversearch/DriverSearch';

// import banner from 'images/banner.jpg';
// import bannerone from 'images/bannerone.jpg';
import banners from 'images/banners.jpg';



function Home() {
  const history = useHistory();
   const handler = () => {
      console.log('user created');
   }

  //  <img className="banner" src={banner} alt="" />
  //         <h2 className="banner__toph2">Your</h2>
  //         <h2 className="banner__toph3" >Nationwide</h2>
  //         <h2 className="banner__h2">Delivery</h2>
  //         <h2 className="banner__toph4">Partner</h2>
  //         <button className="banner__button" onClick={()=>history.push('/signup')}>Sign Up</button>
  return (
    <div className="home" style={{height:"1500px"}}>
       <div className="banner__container">
         
         <img className="banner" src={banners} alt=""/>
       </div>
      <div className="category__container">
        <Category 
        label="Search Driver" 
        title="Quick Driver/Rider Search" 
        subtitle="Search for drivers in your locality." 
        buttonHandler={handler}>
        <DriverSearch />
        </Category>
        <Category 
        label="Check Rate" 
        title="Get A Quick Delivery Rate" 
        subtitle="Competitive shipping rates designed for your needs." 
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
