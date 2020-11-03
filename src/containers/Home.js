import React from 'react';
import './Home.css';

function Home(){
     return(
         <div className="home">
          <div className="home__banner">
                <div className="home__category">
                  <h1 className="home__categoryHeading">category</h1>
                  <div className="home_categories">
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Appliances</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Computers</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Phones/ Accessories</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Fashion</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Baby</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Arts/ Craft</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Home Deco</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Beauty/ Baby Care</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Tools</span> 
                        </div>   
                        <div className="home__categoryOption">
                          <div className="home__categoryOptionOne"></div>   
                          <span className="home__categoryOptionTwo">Security</span> 
                        </div>   
                    </div> 
                 </div>
                
              <img className="home__bannerImage" alt="product__logo" src={require('../assets/images/express.jpg')}/>      
          </div>
          <div className="home__amazing">
               <span className="home__amazingTitle">amazing deals</span>
          </div>
          <div className="home__amazingProducts">
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/women_dress.jpg')}/ >  
                 
                   
          </div>
          <div className="home__trending">
               <span className="home__trendingTitle">trending</span>
               <div className="home__trendingProducts">
               <div className="home__trendingProduct">
                   <img className="home__trendingSingleProduct" src={require('../assets/images/loffers.jpg')}/>
                   <div className="home__trendingCountry"> 
                        <img className="home__trendingCountryFlag" src={require('../assets/images/usa.jpg')}/>
                        
                   </div>
               </div>
               <div className="home__trendingProduct">
                   <img className="home__trendingSingleProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/>
                   <div className="home__trendingCountry"> 
                        <img className="home__trendingCountryFlag" alt="product__logo" src={require('../assets/images/nigeria.png')}/>
                        
                   </div>
               </div>
            
               <div className="home__trendingProduct">
                   <img className="home__trendingSingleProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/>
                   <div className="home__trendingCountry"> 
                        <img className="home__trendingCountryFlag" alt="product__logo" src={require('../assets/images/singapore.jpg')}/>
                      
                   </div>
               </div>
               <div className="home__trendingProduct">
                   <img className="home__trendingSingleProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/>
                   <div className="home__trendingCountry"> 
                        <img className="home__trendingCountryFlag" alt="product__logo" src={require('../assets/images/lebanon.jpg')}/>
                        
                   </div>
               </div>
               <div className="home__trendingProduct">
                   <img className="home__trendingSingleProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/>
                   <div className="home__trendingCountry"> 
                        <img className="home__trendingCountryFlag" alt="product__logo" src={require('../assets/images/mauritus.jpg')}/>
                     
                   </div>
               </div>
               </div>
          </div>
          <div className="home__shippingBanner" >
              {/* <img  src={require('../assets/images/shipping_banner.jpg')} /> */}
          </div>
          <div className="home__amazing">
               <span className="home__amazingTitle">express</span>
          </div>
          <div className="home__amazingProducts">
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/loffers.jpg')}/ >  
               <img className="home__amazingProduct" alt="product__logo" src={require('../assets/images/women_dress.jpg')}/ >       
          </div>
         </div>
         
     );


}

export default Home;