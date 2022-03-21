import React from "react";
import {Link} from "react-router-dom";
import '../explore.css';



const NavigationSidebar = ({
                               active = 'explore'
                           }) => {
    return (
        <>
            <div className="list-group wd-bottom-margin wd-no-wrap-text">
                <a className="list-group-item list-group-item-action wd-navigation-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <Link to="tuiter/home"
                      className={`list-group-item list-group-item-action wd-navigation-item
        ${active === 'home' ? 'active' : ''}`}
                >
                    <i class="fas fa-home"></i><span className="d-none d-xl-block wd-nav-title">Home</span></Link>
                <Link to="/tuiter/explore"
                      className={`list-group-item list-group-item-action wd-navigation-item
        ${active === 'explore' ? 'active' : ''}`}>
                    <i class="fas fa-hashtag "></i><span className="d-none d-xl-block wd-nav-title">Explore</span></Link>
                <a href="/"
                   className="list-group-item list-group-item-action wd-navigation-item">
                    <i class="fas fa-bell"></i><span className="d-none d-xl-block wd-nav-title"> Notifications</span></a>
                <a href="/"
                   className="list-group-item list-group-item-action wd-navigation-item">
                    <i class="fas fa-envelope"></i> <span className="d-none d-xl-block wd-nav-title">Messages</span></a>
                <a href="/"
                   className="list-group-item list-group-item-action wd-navigation-item">
                    <i class="fas fa-bookmark"></i> <span className="d-none d-xl-block wd-nav-title">Bookmarks</span></a>
                <a href="/"
                   className="list-group-item list-group-item-action wd-navigation-item">
                    <i class="fas fa-list"></i><span className="d-none d-xl-block wd-nav-title"> Lists</span></a>
                <a href="/"
                   className="list-group-item list-group-item-action wd-navigation-item">
                    <i class="fas fa-user"></i> <span className="d-none d-xl-block wd-nav-title">Profile</span></a>
                <a href="/"
                   className="list-group-item list-group-item-action wd-navigation-item">
                        <span className="fa-stack fa-xs">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x "></i>
                            </span>
                    <span className="d-none d-xl-block wd-nav-title">More</span>
                </a>
            </div>
            <div className="d-grid mt-2 wd-tuit-button">
                <a href="tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
};
export default NavigationSidebar;
