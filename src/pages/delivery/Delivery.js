import React, { useState } from 'react'
import './Delivery.css';

export default function Delivery() {
    
    const [ selectedValue,setSelectedValue ] = useState('');
    const [ deliveryType,setDeliveryType ] = useState('');
    const [ prepare,setPrepare ] = useState(true);
    const [ recent,setRecent ] = useState(false);
    const [ notifications,setNotifications ] = useState(false);

    const handleSelect = e => {
         setSelectedValue(e.target.value);
    }
    const handleDeliveryType = e => {
         setDeliveryType(e.target.value);
    }

    const showPrepare = () => {
         setPrepare(true);
         setRecent(false);
         setNotifications(false);
    }
    const showRecents = () => {
         setPrepare(false);
         setRecent(true);
         setNotifications(false);
    }
    const showNotifications = () => {
         setPrepare(false);
         setRecent(false);
         setNotifications(true);
    }
    return (
        <div style={{height:"2000px"}}>
             <div className="delivery">
             <div className="delivery__navigation">
                         <p  onClick={showPrepare}>Prepare Delivery</p>
                         <p onClick={showRecents}>Recent Deliveries</p>
                         <p onClick={showNotifications}>Notifications</p>
             </div>
                 { recent && <div><h3>Recent Deliveries</h3></div>}
                 { notifications && <div><h3>Notifications</h3></div>}
               
                 {
                     prepare &&  <div className="prepare">
                     <div>
                          <h3>Prepare Delivery</h3>
                     </div>
                      <div className="delivery__top">
                          <div>
                           <p>Item*</p>
                           <input type="text" placeholder="item" />
                          </div>
        
                          <div>
                           <p>Quantity*</p>
                           <input type="text" placeholder="quantity" />
                          </div>
                      </div>
                      <div className="delivery__weight">
                      <div>
                           <p>Weight*</p>
                            <select value={selectedValue} onChange={handleSelect}>
                                <option value="kg">kg</option>
                                <option value="lb">lb</option>
                            </select>
                          </div>
                      </div>
                      <div className="delivery__from">
                      <div>
                           <p>From*</p>
                           <input type="text" placeholder="from" />
                          </div>
                      </div>
                      <div className="delivery__to">
                      <div>
                           <p>To*</p>
                           <input type="text" placeholder="to" />
                          </div>
                      </div>
                      <div className="delivery__weight">
                      <div>
                           <p>Delivery Type*</p>
                            <select value={deliveryType} onChange={handleDeliveryType}>
                                <option value="express">Express</option>
                                <option value="regular">Regular</option>
                            </select>
                          </div>
                      </div>
                      <div className="delivery__time">
                      <div>
                           <p>Pickup Time*</p>
                           <input type="time" placeholder="to" />
                          </div>
                      </div>
    
                      <div className="delivery__send">
                          <div>
                           <p>Send To*</p>
                           <input type="text" placeholder="Name" />
                          </div>
                          <div>
                           <p>Contact 1*</p>
                           <input type="text" placeholder="contact 1" />
                          </div>
                          <div>
                           <p>Contact 2</p>
                           <input type="text" placeholder="contact" />
                          </div>
                      </div>
                      <div className="delivery__receive">
                          <div>
                           <p>Receive By*</p>
                           <input type="text" placeholder="Name" />
                          </div>
                          <div>
                           <p>Contact 1*</p>
                           <input type="text" placeholder="contact 1" />
                          </div>
                          <div>
                           <p>Contact 2</p>
                           <input type="text" placeholder="contact" />
                          </div>
                      </div>
                      <button className="delivery__submit">sumbit</button>
                     </div>
                 }
             </div>
        </div>
    )
}
