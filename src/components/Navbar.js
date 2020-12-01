import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
          <div className="navbar-row">
          <h1 className="bio-text">Smooth Waggie LTD</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/About">About</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Products">Products</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Reviews">Reviews</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Logout">Logout</Link>
          </div>
          {/* <Switch>
            <Route exact path="/">
               <Bio/>
            </Route>
            <Route exact path="/GuitarArchives">
             <GuitarContainer/>
            </Route>
            <Route exact path="/Demos">
             <Demos/>
            </Route>
            <Route exact path="/Workshop">
             <Workshop/>
            </Route>
          </Switch> */}
          
        </Router> 
  )
}

export default Navbar