import React from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";

const Header = () => {
  const userRole = localStorage.getItem("role");

  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/logout_api/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        console.log("succesifull logout");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        console.log("An error occured while logging out");
      }
    } catch (error) {
      console.log("An error occured while loggin out", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className="main-header navbar navbar-expand navbar-white navbar-light  "
        style={{ padding: "0.1rem 0.5rem" }}
      >
        {/* Left navbar links */}
        <ul className="navbar-nav " style={{ padding: "0.1rem 0.5rem" }}>
          <li className="nav-item" style={{ padding: "0.1rem 0.5rem" }}>
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="/dashboard"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          {/* <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li> */}
          {/* <li className="nav-item d-none d-sm-inline-block">
      <a href="/dashboard" className="nav-link">Contact</a>
    </li> */}

          <li className="nav-item text-bold d-none d-sm-inline-block mt-2">
            <li>
              Welcome {username} <span>({userRole})</span>
            </li>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="/dashboard"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            {/* <a className="nav-link" data-toggle="dropdown" href="/dashboard">
        <i className="far fa-comments" />
        <span className="badge badge-danger navbar-badge">3</span>
      </a> */}
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="/dashboard" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="/dashboard" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="/dashboard" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="/dashboard" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          {/* <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="/dashboard">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">15</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-item dropdown-header">15 Notifications</span>
        <div className="dropdown-divider" />
        <a href="/dashboard" className="dropdown-item">
          <i className="fas fa-envelope mr-2" /> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </a>
        <div className="dropdown-divider" />
        <a href="/dashboard" className="dropdown-item">
          <i className="fas fa-users mr-2" /> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </a>
        <div className="dropdown-divider" />
        <a href="/dashboard" className="dropdown-item">
          <i className="fas fa-file mr-2" /> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </a>
        <div className="dropdown-divider" />
        <a href="/dashboard" className="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li> */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="/dashboard"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-controlsidebar-slide="true"
              href="/dashboard"
              role="button"
            >
              <i className="fas fa-th-large" />
            </a>
          </li>

          <li style={{ cursor: "pointer" }} className="nav-item">
            <span
              onClick={handleLogout}
              className="text-bold mx-3 pt-2 text-primary"
            >
              Logout
            </span>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  );
};

export default Header;
