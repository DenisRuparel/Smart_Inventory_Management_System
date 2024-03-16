import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
            <div className="main-wrapper">

                <div className="header">

                    <div className="header-left active">
                        <a href="/admin/dashboard" className="logo">
                            <h3 className='ms-3 my-3'>{props.title}</h3>
                        </a>
                        <a href="/admin/dashboard" className="logo-small">
                            <img src="../assets/img/inventory.png" alt="" />
                        </a>
                        <a id="toggle_btn" href="/">
                        </a>
                    </div>

                    <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                        <span className="bar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </a>

                    <ul className="nav user-menu">

                        <li className="nav-item">
                            <div className="top-nav-search">
                                <a href="/" className="responsive-search">
                                    <i className="fa fa-search"></i>
                                </a>
                                <form action="#">
                                    <div className="searchinputs">
                                        <input type="text" placeholder="Search Here ..." />
                                        <div className="search-addon">
                                            <span><img src="../assets/img/icons/closes.svg" alt="img" /></span>
                                        </div>
                                    </div>
                                    <a className="btn" id="searchdiv"><img src="../assets/img/icons/search.svg" alt="img" /></a>
                                </form>
                            </div>
                        </li>


                        <li className="nav-item dropdown has-arrow flag-nav">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/"
                                role="button">
                                <img src="../assets/img/flags/us1.png" alt="" height="20" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="/" className="dropdown-item">
                                    <img src="../assets/img/flags/us.png" alt="" height="16" /> English
                                </a>
                                <a href="/" className="dropdown-item">
                                    <img src="../assets/img/flags/fr.png" alt="" height="16" /> French
                                </a>
                                <a href="/" className="dropdown-item">
                                    <img src="../assets/img/flags/es.png" alt="" height="16" /> Spanish
                                </a>
                                <a href="/" className="dropdown-item">
                                    <img src="../assets/img/flags/de.png" alt="" height="16" /> German
                                </a>
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <a href="/" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                                <img src="../assets/img/icons/notification-bing.svg" alt="img" /> <span
                                    className="badge rounded-pill">4</span>
                            </a>
                            <div className="dropdown-menu notifications">
                                <div className="topnav-dropdown-header">
                                    <span className="notification-title">Notifications</span>
                                    <a href="/" className="clear-noti"> Clear All </a>
                                </div>
                                <div className="noti-content">
                                    <ul className="notification-list">
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="../assets/img/profiles/avatar-02.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">John Doe</span> added
                                                            new task <span className="noti-title">Patient appointment booking</span>
                                                        </p>
                                                        <p className="noti-time"><span className="notification-time">4 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="../assets/img/profiles/avatar-03.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Tarah Shropshire</span>
                                                            changed the task name <span className="noti-title">Appointment booking
                                                                with payment gateway</span></p>
                                                        <p className="noti-time"><span className="notification-time">6 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="../assets/img/profiles/avatar-06.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Misty Tison</span>
                                                            added <span className="noti-title">Domenic Houston</span> and <span
                                                                className="noti-title">Claire Mapes</span> to project <span
                                                                    className="noti-title">Doctor available module</span></p>
                                                        <p className="noti-time"><span className="notification-time">8 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="../assets/img/profiles/avatar-17.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Rolland Webber</span>
                                                            completed task <span className="noti-title">Patient and Doctor video
                                                                conferencing</span></p>
                                                        <p className="noti-time"><span className="notification-time">12 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="../assets/img/profiles/avatar-13.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span>
                                                            added new task <span className="noti-title">Private chat module</span>
                                                        </p>
                                                        <p className="noti-time"><span className="notification-time">2 days ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <a href="activities.html">View all Notifications</a>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown has-arrow main-drop">
                            <a href="/" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                                <span className="user-img"><img src="../assets/img/profiles/avator1.jpg" alt="" />
                                    <span className="status online"></span></span>
                            </a>
                            <div className="dropdown-menu menu-drop-user">
                                <div className="profilename">
                                    <div className="profileset">
                                        <span className="user-img"><img src="../assets/img/profiles/avator1.jpg" alt="" />
                                            <span className="status online"></span></span>
                                        <div className="profilesets">
                                            <h6>Denis Ruparel</h6>
                                            <h5>Administrator</h5>
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                    <a className="dropdown-item" href="/myprofile"> <i className="me-2" data-feather="user"></i> My
                                        Profile</a>
                                    <a className="dropdown-item" href="generalsettings.html"><i className="me-2"
                                        data-feather="settings"></i>Settings</a>
                                    <hr className="m-0" />
                                    <a className="dropdown-item logout pb-0" href="/signin"><img
                                        src="../assets/img/icons/log-out.svg" className="me-2" alt="img" /><Link to='/signin'>Logout</Link></a>
                                </div>
                            </div>
                        </li>
                    </ul>


                    <div className="dropdown mobile-user-menu">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/myprofile">My Profile</a>
                            <a className="dropdown-item" href="generalsettings.html">Settings</a>
                            <a className="dropdown-item"><Link to='/signin'>Logout</Link></a>
                        </div>
                    </div>
                </div>


                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <ul>
                                <li className="active">
                                    <a href="/admin/dashboard"><img src="../assets/img/icons/dashboard.svg" alt="img" /><span>
                                        Dashboard</span> </a>
                                </li>
                                <li className="submenu">
                                    <a href="/"><img src="../assets/img/icons/tools.png" alt="img"/><span>
                                        Equipments</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="/admin/addequipments">Add Equipments</a></li>
                                        <li><a href="/equipmentslist">Equipments List</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="/"><img src="../assets/img/icons/users1.svg" alt="img"/><span>
                                        Users</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="/admin/userslist">Users</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="/"><img src="../assets/img/icons/profile.png" alt="img" /><span>
                                        My Profile</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="/myprofile">Edit Profile</a></li>
                                    </ul>
                                </li>
                                {/* <li className="submenu">
                                    <a href="/"><img src="../assets/img/icons/settings.svg" alt="img" /><span>
                                        Settings</span> <span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="generalsettings.html">General Settings</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar
