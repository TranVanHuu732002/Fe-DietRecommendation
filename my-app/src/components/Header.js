import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      {/* Header */}
      <div className="header" style={{ background: "#ccc", height: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <Link className="navbar-brand mx-3 header-title" to="/">
                <div>HomePage</div>
              </Link>
              <Link className="navbar-brand mx-3 header-title" to="/">
                <div>Food</div>
              </Link>
              <Link className="navbar-brand mx-3 header-title" to="/contact">
                <div>About</div>
              </Link>
            </div>
            
            <div className="col-md-1 mx-5 d-flex align-items-center justify-content-end Logo">
              {/* <Dropdown>
                  <Dropdown.Toggle
                    className="name-button dropdown-toogle"
                    id="dropdown-basic"
                    variant="info"
                  >
                    Hiii
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item
                      className="dropdown-item"
                      as={Link}
                      to="/profile"
                    >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      as={Link}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}

              <>
                <button className="btn btn-outline-light text-dark boder-1">
                  <a href="/login">Login</a>
                </button>
                <button className="btn btn-outline-light text-dark mx-2">
                  <a href="/register">Register</a>
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
