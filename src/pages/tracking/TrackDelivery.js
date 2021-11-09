import './TrackDelivery.css';
import LanguageIcon from '@material-ui/icons/Language';

 function TrackDelivery() {
    return (
        <div className="trackdelivery" style={{height:"2000px"}}>
            {/* <div className="trackdelivery__sidebar">
                <div className="trackingsidebar_item selected">
                    <span>Track Delivery</span>
                    <TrendingFlatIcon />
                </div>
                <div className="trackingsidebar_item last">
                    <span>Advance Delivery</span>
                    <TrendingFlatIcon />
                </div>
                
            </div> */}
            <div className="trackdelivery__main">
            <div className="trackingMain__content">
                <div className="trackingIcon__container">
                  <LanguageIcon />
                </div>
                <h3>Track Delivery</h3>
                <p>Use shipment tracking options for your mobile devices and PC. Get notified when a pickup is</p>
                <p>scheduled or a shipment is delivered and receive an update on your shipment status any time.</p>
            </div>
            {/* <div className="trackingMainContent__select">
                <div className="maintracking__item">
                    <div className="maintrackingItem__left">
                     <div></div>   
                    <h3>By Number</h3>
                    </div>
                    <TrendingFlatIcon />
                </div>
            </div> */}

            <div className="trackingMainContent__form">
                 
                 <div>
                     <p>Delivery Number</p>
                     <input type="text" />
                 </div>
                 <div>
                     <p>Rider/Driver Code</p>
                     <input type="text" />
                 </div>
                   <button>Track</button>
              </div>
            </div>
        </div>
    )
}
export default TrackDelivery;