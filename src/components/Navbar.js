import { textAlign } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" style={{color:"darkblue"}}><h1 style={{marginLeft:"450px"}}>Employee-Management System</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home Page</a>
        </li>
        </ul> */}
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  {/* </div> */}
</nav>
        </header>

    )
}

export default Navbar;