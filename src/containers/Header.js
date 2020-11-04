import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import MenuIcon from '@material-ui/icons/Menu';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
     return(
         <div className="header">
              <div className="header__one">
                  <img className="header__logo" src={require('../assets/images/logo.png')} alt="kos__logo"/>
                  <div className="header__oneNav">
                     <span>FIND SHIPPING ADDRESS</span>
                  <div className="header__twoSearch">
                     <input type="text" placeholder="type city" className="header__oneSearchInput" />
                     <SearchIcon className="header_oneSearchIcon" />
                  </div>
                    {/* <div className="header__oneHelp">
                       <span className="header__oneHelpcenter">Help Center</span>
                       <ChildCareIcon className="header__oneChildCareIcon"/>
                    </div> */}
                  </div>
              </div>
              <div className="header__two">
                  {/* <MenuIcon className="header__twoMenuIcon" /> */}
                  <div className="header__twoSearch">
                     <input type="text" placeholder="search" className="header__twoSearchInput" /> 
                     <SearchIcon className="header_twoSearchIcon" />
                  </div>
                  <div className="header__twoNav">
                      <div className="header__twoOptionOne">
                           <span className="header__twoOptionLineOne">Account</span>
                           <Link to="/auth" style={{textDecoration:'none',color:'white'}}>
                              <span className="header__twoOptionLineTwo">Sign In</span>
                           </Link>
                      </div>
                      <div className="header__twoOptionOne">
                           <span className="header__twoOptionLineHide">Account</span>
                           <span className="header__twoOptionLineTwo">
                                  Shipment
                                </span>
                      </div>
                      <div className="header__twoOptionTwo">
                           <StarIcon className="header__twoStarIcon"/>
                           <span className="header__twoWish">Wish</span>
                      </div>
                      <div className="header__twoOptionThree">
                           <ShoppingBasketIcon className="header__twoBasket"/>
                      </div>
                  </div>
              </div>
         </div>
     )
}

export default Header;