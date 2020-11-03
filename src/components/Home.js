import React from 'react';
import './Home.css';

function Home() {
     return(
         <div className="home">
            <div className="home__container">
                  <img  className="home__image" src={require('../assets/images/express.jpg')}/> 
                  <div className="home__bar"></div>
            </div>
         </div>
     )
}

export default Home;