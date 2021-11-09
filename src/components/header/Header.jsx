import React,{useState,useEffect } from 'react'
import koslogo from '../../images/koscourier.png';
import  makeStyles  from "@material-ui/styles/makeStyles";
import { 
  Link,
  useHistory 
} from 'react-router-dom';
import './Header.css';
import  useMediaQuery  from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from '@material-ui/core/IconButton';
import  MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from  '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  tab: {
       textTransform:'none',
       fontFamily:"Roboto Condensed",
       fontSize:"15px",
       minWidth:5,
        marginLeft:"30px"
  },
  menuItem: {
      textTransform:'none',
       fontFamily:"Roboto Condensed",
       fontSize:"16px"
  },
  header_login: {
    padding:"5px",
    backgroundColor: "#dc291e",
    color: "white",
    width: "80px",
    borderRadius:"5px",
    marginLeft:"30px",
    
    "&:hover":{
      backgroundColor: "white",
      color:"#dc291e",
      border:"0.5px solid #dc291e"
    
    }
 },
 topbar: {
    backgroundColor:"#dc291e",
    width:"100%",
    height:"20px"
 }

})

const Header =( ) =>{
    const theme = useTheme();
     const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
     const matches = useMediaQuery(theme.breakpoints.down("sm"));
     const classes = useStyles();

     const [ value,setValue ] = useState(0);
     const [ anChorEl,setAnChorEl ] = useState(null);
     const [ open,setOpen ] = useState(false);
     const [ openDrawer,setOpenDrawer ] = useState(false);
     const history = useHistory();


     const handleChange = (e,value) => {
       setValue(value);
     };

     const handleClick = e => {
        setAnChorEl(e.currentTarget);
        setOpen(true);
     }
    
    const handleClose = e => {
      setAnChorEl(null);
      setOpen(false);
    }
     
    useEffect(() => {
       switch(window.location.pathname) {
         case '/':
            if( value !== 0) {
               setValue(0)
            }
         break;
         case '/trackdelivery':
           if(value !== 1) {
              setValue(1);
           } 
         break;
         case '/delivery':
           if(value !== 2) {
             setValue(2);
           }   
         break;
         case '/about':
           setValue(4);
          break; 
         default:
           break;      
       }
    }, [value])

     const tabs = (
         <React.Fragment>
              <Tabs 
                    value={value}
                    onChange={handleChange} 
                    className={classes.tabContainer}
                    indicatorColor="#dc291e"
                    >
                   <Tab className={classes.tab} onClick={()=>setValue(0)}  component={Link} to="/" label="Home" />
                   <Tab
                    
                    className={classes.tab}  
                    
                    onClick={()=>setValue(1)}  
                    component={Link} 
                    to="/trackdelivery" 
                    label="Track" />
                   {/* <Tab
                    aria-owns={ anChorEl ? 'simple-menu': undefined}
                    aria-haspopup = { anChorEl ? "true": undefined}
                    className={classes.tab}  
                    onMouseOver={e => handleClick(e)}
                    onClick={()=>setValue(1)}  
                    component={Link} 
                    to="/trackdelivery" 
                    label="Track" /> */}
                   <Tab className={classes.tab} onClick={()=>setValue(2)}   component={Link} to="/delivery" label="Custom Delivery" />
                   <Button 
                    variant="contained"
                    component={Link}
                    to="/login"
                    className={classes.header_login}>Log In</Button>
                    <Menu 
                      MenuListProps={{onMouseLeave:handleClose}}
                      id="simple-menu" 
                      anchorEl={anChorEl} 
                      open={open} 
     
                      onClose={handleClose}>
                           <MenuItem 
                            component={Link}
                            to="/trackdelivery"
                            classes={{root:classes.menuItem}}
                           onClick={()=> { handleClose(); setValue(1)}}>
                             Track Delivery
                           </MenuItem>
                           <MenuItem 
                           classes={{root:classes.menuItem}}
                           onClick={()=> { handleClose(); setValue(1)}}>
                             Advance Tracking
                           </MenuItem>
                    </Menu>
               </Tabs>
         </React.Fragment>
     );
    const drawer = (
        <React.Fragment>
          
          <SwipeableDrawer classes={{paper:classes.drawer}} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)} >
          <div  className={classes.toolbarMargin}/>
             <List disablePadding>
                 <ListItem 
                 selected = {value === 0}
                 onClick={()=>{setOpenDrawer(false); setValue(0)}}
                  button divider component={Link}to="/"> 
                   <ListItemText 
                      className={value === 0 ? [classes.drawerItem,classes.drawerSelectedItem]: classes.drawerItem} 
                      disableTypography>Home</ListItemText> 
                 </ListItem>
                 <ListItem 
                   selected = {value === 1}
                   onClick={()=>{setOpenDrawer(false); setValue(1)}}
                   button divider component={Link}to="/trackdelivery"> 
                   <ListItemText 
                   className={value === 1 ? [classes.drawerItem,classes.drawerSelectedItem]: classes.drawerItem}  
                   disableTypography>Track Delivery</ListItemText> 
                 </ListItem>
                 <ListItem 
                  selected = {value === 2}
                  onClick={()=>{setOpenDrawer(false); setValue(2)}}
                  button divider component={Link}to="/delivery"> 
                   <ListItemText 
                   className={value === 2 ? [classes.drawerItem,classes.drawerSelectedItem]: classes.drawerItem}
                   disableTypography>Custom Delivery</ListItemText> 
                 </ListItem>
                 <ListItem 
                   selected = {value === 3}
                   onClick={()=>{setOpenDrawer(false); setValue(3)}}
                   button divider component={Link}to="/login"> 
                   <ListItemText 
                   className={value === 3 ? [classes.drawerItem,classes.drawerSelectedItem]: classes.drawerItem}
                   disableTypography>Login</ListItemText> 
                 </ListItem>
                 <ListItem 
                  selected = {value === 4}
                  onClick={()=>{setOpenDrawer(false); setValue(4)}}
                  button divider component={Link}to="/signup"> 
                   <ListItemText 
                   className={value === 4 ? [classes.drawerItem,classes.drawerSelectedItem]: classes.drawerItem}
                   disableTypography>Signup</ListItemText> 
                 </ListItem>
                 
             </List>
          </SwipeableDrawer>
          <IconButton className={classes.drawerIconContainer } onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
               <MenuIcon className={classes.drawerIcon} />
          </IconButton>
        </React.Fragment>
        )
    return (
       <React.Fragment>
          <div className="header__bar">
                <span onClick={()=>history.push('/about')}>About Us</span>
                
                <span onClick={()=>history.push('/partnership')}>Partnership</span>
          </div>
          <div className="header">
          <img  className="header__logo" src={koslogo} alt="header__logo" />
          {matches ? drawer : tabs}
        </div>
       </React.Fragment>
    )
}

export default Header;
