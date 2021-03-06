import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import Products from './Products'
import About from "./About"
import Reviews from "./Reviews"

const Navbar = () => {
  return (
    <Router>
          <div className="navbar-row">
          <h1 className="navbar-logo">Smooth Waggie LTD</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/About">About</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Products">Products</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Reviews">Reviews</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Logout">Logout</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/About">
              <About/>
            </Route>
            <Route exact path="/Products">
              <Products/>
            </Route>
            <Route exact path="/Reviews">
              <Reviews/>
            </Route>
          </Switch>
          
        </Router> 
  )
}

export default Navbar