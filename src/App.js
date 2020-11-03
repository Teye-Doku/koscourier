import React from 'react';
import './App.css';
import Header from './containers/Header';
import Home from './containers/Home';
import Footer from './containers/Footer';
// import Home from './components/Home';
// import Catalog from './components/Catalog';
import Auth from './containers/Auth';
// import Orders from './components/Orders';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (

  <Router>
    <div className="App">
       
       <Switch>
         {/* <Route path="/orders">
             <Header />
             <Orders />
         </Route>
         
         <Route path="/catalog">
             <Header />
             <Catalog />
         </Route>
         <Route path="/orders">
             <Header />
             <Orders />
         </Route> */}
         <Route path="/auth">
             <Auth />
         </Route>
         <Route path="/">
              <Header />
              
              <Home />
              <Footer />
         </Route>
           
       </Switch>
    </div>
  </Router>  
   
  );
}

export default App;
