import React from 'react';
import './Category.css';

const Category = ( { children,label ,title,subtitle, buttonHandler}) =>{
    return (
        <div className="category">
          <div className="category__top">
               <div className="category__bar"></div>
               <h3>{title}</h3>
               <p>{subtitle}</p>
          </div>  
          <div className="category__content">
              {children}
          </div>
          <div className="category__bottom">
              <button onClick={buttonHandler}> {label} </button>
          </div>
        </div>
    )
}

export default Category;
