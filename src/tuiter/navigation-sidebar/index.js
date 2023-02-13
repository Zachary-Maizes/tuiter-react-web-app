import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faBell,
  faBookmark,
  faCircleChevronDown,
  faEnvelope,
  faHashtag,
  faHome,
  faList,
  faUser
} from '@fortawesome/free-solid-svg-icons';
const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="#Tuiter">
        <FontAwesomeIcon icon={faTwitter} fixedWidth />
      </a>
      <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href="#Home">
        <FontAwesomeIcon icon={faHome} fixedWidth />
        <p className="d-none d-xl-inline">Home</p>
      </a>
      <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="#Explore">
        <FontAwesomeIcon icon={faHashtag} fixedWidth />
        <p className="d-none d-xl-inline">Explore</p>
      </a>
      <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="#Notifications">
        <FontAwesomeIcon icon={faBell} fixedWidth />
        <p className="d-none d-xl-inline">Notifications</p>
      </a>
      <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="#Messages">
        <FontAwesomeIcon icon={faEnvelope} fixedWidth />
        <p className="d-none d-xl-inline">Messages</p>
      </a>
      <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="#Bookmarks">
        <FontAwesomeIcon icon={faBookmark} fixedWidth />
        <p className="d-none d-xl-inline">Bookmarks</p>
      </a>
      <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="#Lists">
        <FontAwesomeIcon icon={faList} fixedWidth />
        <p className="d-none d-xl-inline">Lists</p>
      </a>
      <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="#Profile">
        <FontAwesomeIcon icon={faUser} fixedWidth />
        <p className="d-none d-xl-inline">Profile</p>
      </a>
      <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="#More">
        <FontAwesomeIcon icon={faCircleChevronDown} fixedWidth />
        <p className="d-none d-xl-inline">More</p>
      </a>
    </div>
  );

};
export default NavigationSidebar;