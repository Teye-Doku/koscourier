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
            <p>Weight*</p>   
            <input type="text" placeholder="weight" />
           </div>
            <div className="rating__spacing"></div>
            <div className="rating__unit">
            <p>Unit*</p>    
            <input type="text" placeholder="unit"   />
            </div>
           </div>
        </div>
    )
}

export default RatingCheck;