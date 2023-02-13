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
      <a className="list-group-item">
        <FontAwesomeIcon icon={faTwitter} fixedWidth />
      </a>
      <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
        <FontAwesomeIcon icon={faHome} fixedWidth />
        <p className="d-none d-xl-inline">Home</p>
      </a>
      <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
        <FontAwesomeIcon icon={faHashtag} fixedWidth />
        <p className="d-none d-xl-inline">Explore</p>
      </a>
      <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <FontAwesomeIcon icon={faBell} fixedWidth />
        <p className="d-none d-xl-inline">Notifications</p>
      </a>
      <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
        <FontAwesomeIcon icon={faEnvelope} fixedWidth />
        <p className="d-none d-xl-inline">Messages</p>
      </a>
      <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
        <FontAwesomeIcon icon={faBookmark} fixedWidth />
        <p className="d-none d-xl-inline">Bookmarks</p>
      </a>
      <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
        <FontAwesomeIcon icon={faList} fixedWidth />
        <p className="d-none d-xl-inline">Lists</p>
      </a>
      <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
        <FontAwesomeIcon icon={faUser} fixedWidth />
        <p className="d-none d-xl-inline">Profile</p>
      </a>
      <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
        <FontAwesomeIcon icon={faCircleChevronDown} fixedWidth />
        <p className="d-none d-xl-inline">More</p>
      </a>
    </div>
  );

};
export default NavigationSidebar;