
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom"



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to= {"/"} className="navbar-brand" >
          <span>IN-</span>ACTION
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" >
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <Link to={`category/star-wars`} className="nav-link" >
                STAR WARS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`category/di-ci`} className="nav-link" >
                DC COMICS 
              </Link>
            </li>

            <li className="nav-item">
              <Link to={`category/marvel`} className="nav-link" >
                MARVEL
              </Link>
            </li>
            <li className="navItem">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;