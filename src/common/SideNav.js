import React from "react";
import { Link } from "react-router-dom";
import { userSystemRole } from "../apiConfig";

const SideNav = () => {
  const userRole = localStorage.getItem("role");

  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-black elevation-2 collapsable" >
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="brand-text font-weight-bold ">Escale labs</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
        
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills  nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}

              <li className="nav-item ">
                <Link
                  to="/main/dashboard"
                  className="nav-link active bg-primary"
                >
                  <i className="fa fa-th-large nav-icon " />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/main/profile" className="nav-link ">
                  <i className="far fa-user-circle nav-icon" />
                  <p>Profile</p>
                </Link>
              </li>

              <li
                style={{
                 
                }}
                className="nav-item"
              >
                <a href="?" className="nav-link">
                  <i className="nav-icon fa fa-tasks" />
                  <p>
                    Applications
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview ml-2">
                        <li className="nav-item ml-2">
                          <li
                            style={{
                            
                            }}
                            className="nav-item"
                          >
                            <Link to="/main/application" className="nav-link">
                              <i className="nav-icon fa fa-globe nav-icon" />
                              <p>New Application</p>
                            </Link>
                          </li>

                          <li
                            style={{
                             
                            }}
                            className="nav-item"
                          >
                            <Link to="/main/applications" className="nav-link">
                              <i className="nav-icon fa fa-globe nav-icon" />
                              <p>Submitted</p>
                            </Link>
                          </li>
                          <li
                            style={{
                    
                            }}
                            className="nav-item"
                          >
                          
                          </li>


                          {/* <li style={{display: userRole === `${userSystemRole.admin}` || userRole === 'vendor'? 'block':  'none'}} className="nav-item">
                 <Link to='/main/referralcarecenter' className="nav-link">
                   <i className="far fa-user nav-icon"></i>
                   <p>Referral care</p>
                 </Link>
               </li> */}

                          <li
                            style={{
                              display:
                                userRole === `${userSystemRole.admin}` ||
                                userRole === `${userSystemRole.vendor}` ||
                                userRole === `${userSystemRole.data_officer}` ||
                                userRole === `${userSystemRole.kmet_staff}`
                                  ? "block"
                                  : "none",
                            }}
                            className="nav-item"
                          >
                            <Link to="/main/facilities" className="nav-link">
                              <i className="fa fa-plus-square mx-2"></i>
                              <p>Facilities</p>
                            </Link>
                          </li>

                          <li
                            style={{
                              display:
                                userRole === `${userSystemRole.admin}` ||
                                userRole === `${userSystemRole.vendor}` ||
                                userRole === `${userSystemRole.data_officer}` ||
                                userRole === `${userSystemRole.kmet_staff}`
                                  ? "block"
                                  : "none",
                            }}
                            className="nav-item"
                          >
                            <Link to="/main/facilityTypes" className="nav-link">
                              <i className="fa fa-plus-square mx-2"></i>
                              <p>Facility Types</p>
                            </Link>
                          </li>

                          <li
                            style={{
                              display:
                                userRole === `${userSystemRole.admin}` ||
                                userRole === `${userSystemRole.vendor}` ||
                                userRole === `${userSystemRole.data_officer}` ||
                                userRole === `${userSystemRole.kmet_staff}` ||
                                userRole === "RCC"
                                  ? "block"
                                  : "none",
                            }}
                            className="nav-item"
                          >
                            <a href="?" className="nav-link">
                              <i className="nav-icon fas fa-table" />
                              <p>
                                Reports
                                <i className="fas fa-angle-left right" />
                              </p>
                            </a>

                            <ul className="nav nav-treeview ml-2">
                              <li
                                style={{
                                  display:
                                    userRole === `${userSystemRole.admin}` ||
                                    userRole ===
                                      `${userSystemRole.data_officer}` ||
                                    userRole ===
                                      `${userSystemRole.kmet_staff}` ||
                                    userRole === "RCC"
                                      ? "block"
                                      : "none",
                                }}
                                className="nav-item ml-2"
                              >
                                <Link
                                  to="/main/safirecases"
                                  className="nav-link"
                                >
                                  <i className="fa fa-bars nav-icon"></i>
                                  <p>View Safire Cases</p>
                                </Link>
                              </li>

                              <li
                                style={{
                                  display:
                                    userRole === `${userSystemRole.admin}` ||
                                    userRole ===
                                      `${userSystemRole.data_officer}` ||
                                    userRole ===
                                      `${userSystemRole.kmet_staff}` ||
                                    userRole === "RCC"
                                      ? "block"
                                      : "none",
                                }}
                                className="nav-item ml-2"
                              >
                                <Link
                                  to="/main/safirecases"
                                  href=""
                                  className="nav-link"
                                >
                                  <i className="fa fa-bars mr-2"></i>
                                  <p>View Safire Cases</p>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </li>

                        {userRole !== `${userSystemRole.data_officer}` &&
                          userRole !== `${userSystemRole.kmet_staff}` && (
                            <li
                              style={{
                                display:
                                  userRole === `${userSystemRole.admin}` ||
                                  userRole === `${userSystemRole.vendor}` ||
                                  userRole ===
                                    `${userSystemRole.data_officer}` ||
                                  userRole === `${userSystemRole.kmet_staff}`
                                    ? "block"
                                    : "none",
                              }}
                              className="nav-item"
                            >
                              <a href="?" className="nav-link">
                                <i className="nav-icon far fa-envelope" />
                                <p>
                                  Audit Trail
                                  <i className="fas fa-angle-left right" />
                                </p>
                              </a>

                              <ul className="nav nav-treeview ml-2">
                                <li className="nav-item ml-2">
                                  <Link
                                    to="/main/auditTrail"
                                    className="nav-link"
                                  >
                                    <i className="far fa-user nav-icon"></i>
                                    <p>Last login</p>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          )}
                      </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;
