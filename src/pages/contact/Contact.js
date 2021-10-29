import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import RoomIcon from '@material-ui/icons/Room';
import './Contact.css';

 function Contact() {
    return (
        <div className="trackdelivery" style={{height:"2000px"}}>
        <div className="trackdelivery__sidebar">
            <div className="trackingsidebar_item selected">
                <span>Contact</span>
                <TrendingFlatIcon />
            </div>
            <a href="#team" style={{textDecoration:"none"}}>
            <div className="trackingsidebar_item last">
                <span>Info</span>
                <TrendingFlatIcon />
            </div>
            </a>
            
        </div>
        <div className="trackdelivery__main">
        <div className="trackingMain__content">
            <div className="trackingIcon__container">
              <RoomIcon />
            </div>
            <h3>Contact Information </h3>
            <p>Use shipment tracking options for your mobile devices and PC. Get notified when a pickup is</p>
            <p>scheduled or a shipment is delivered and receive an update on your shipment status any time.</p>
        </div>
        <div className="trackingMain__content">
            <h3>Who We Are</h3>
            <p>Use shipment tracking options for your mobile devices and PC. Get notified when a pickup is</p>
            <p>scheduled or a shipment is delivered and receive an update on your shipment status any time.</p>
        </div>
     
     
        </div>
    </div>
     )
}
export default Contact;