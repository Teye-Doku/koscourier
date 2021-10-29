import './App.css';
import Home from 'pages/home/Home';
import Signup from 'pages/signup/Signup';
import Login from 'pages/login/Login';
import Header from 'components/header/Header';
import TrackDelivery from 'pages/tracking/TrackDelivery';
import About from 'pages/about/About';
import Delivery from 'pages/delivery/Delivery';
import Footer from 'components/footer/Footer';
import Contact from 'pages/contact/Contact';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


function App() {

  return (
    <Router>
       <div className="App">
        <Route path="/delivery" exact>
         <Header />
          <Delivery />
          <Footer />
        </Route>
        <Route path="/trackdelivery" exact>
         <Header />
          <TrackDelivery />
          <Footer />
        </Route>
        <Route path="/contact" exact>
         <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path="/about" exact>
         <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/login" exact>
         <Header />
          <Login />
          <Footer />
        </Route>
        <Route path="/signup" exact>
         <Header />
          <Signup />
          <Footer />
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
    </div>
    </Router>
  );
}

export default App;
