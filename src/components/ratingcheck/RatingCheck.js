import React from 'react'
import './RatingCheck.css';
 function RatingCheck() {
    return (
        <div className="rating-container">
            <div className="rating__top">
             <p>From*</p>
              <input type="text" placeholder="type town to transfer from" />
           </div>
           <div className="rating__bottom">
             <p>To*</p>
              <input type="text" placeholder=" type destination town"  />
           </div> 
           <div className="rating__checking">
           <div className="rating__weight">
            <p>Delivery Mode</p>   
            <select>
                <option value="motor">Motor</option>
                <option value="van">Van</option>
                <option value="truck">Truck</option>
            </select>
           </div>
            
           </div>
        </div>
    )
}

export default RatingCheck;