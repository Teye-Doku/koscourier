import React from 'react'
// import CreateIcon from '@material-ui/icons/Create';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {
 useHistory
} from 'react-router-dom';

import './DeliveryItem.css';

 function DeliveryItem() {
     const history = useHistory();
     const gotoDelivery = () => history.push('/delivery');
    return (
        <div className="delivery-item">
            <div className="deliveryitem" onClick={gotoDelivery}>
                <div className="deliveryitem__left" >
                     <BorderColorIcon />
                     <span>Prepare Delivery</span>
                </div>
                <TrendingFlatIcon />
            </div>
            <div className="deliveryitem" onClick={gotoDelivery}>
                <div className="deliveryitem__left">
                     <AccessTimeIcon />
                     <span>Recent Deliveries</span>
                </div>
                <TrendingFlatIcon />
            </div>
            <div className="deliveryitem" onClick={gotoDelivery}>
                <div className="deliveryitem__left">
                     <NotificationsIcon />
                     <span>Notifications</span>
                </div>
                <TrendingFlatIcon />
            </div>
        </div>
    )
}

export default DeliveryItem;
