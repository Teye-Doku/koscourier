import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
     return(
         <div className="header">
             <Link to="/">
               <img className="header__logo" src={require('../assets/images/kosimage.jpg')}/>
             </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Emma</span>
                    <Link to="/auth">
                      <span className="header__optionLineTwo">Sign In</span>
                    </Link>
                </div>
                
             
               <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <Link to="/orders">
                      <span className="header__optionLineTwo">Orders</span>
                    </Link>
                </div>
               
                {/* <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Catlog</span>
                </div> */}
            </div>
            <div className="header__basket">
                <Link to="/catalog">
                   <ShoppingBasketIcon className="header__shoppingBasket" />
                </Link>
               <span className="header__optionLineTwo header__counter">0</span>
            </div>
            <div>
                <p className="header__spacing">spac</p>
            </div>
         </div>
     )
}
export default Header;
