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
import Partnership from 'pages/partnership/Partnership';
import Startriding from 'pages/Startriding/Startriding';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import useAuth from './hooks/useAuth';
import AuthContext from 'context/auth-context';


function App() {

  const { token,login,logout,userId } = useAuth();

  return (
    <AuthContext.Provider value={{
      isLoggedIn:!!token,
      token:token,
      userId:userId,
      login:login,
      logout:logout
     }}>
      <Router>
        <div className="App">
          <Route path="/startriding" exact>
          <Header />
            <Startriding />
            <Footer />
          </Route>
          <Route path="/delivery" exact>
          <Header />
            <Delivery />
            <Footer />
          </Route>
          <Route path="/partnership" exact>
          <Header />
            <Partnership />
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
    </AuthContext.Provider>
  );
}

export default App;
