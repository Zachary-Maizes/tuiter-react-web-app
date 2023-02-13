import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSearch } from "@fortawesome/free-solid-svg-icons";
const ExploreComponent = () => {
  return(
    <>
      <div className="row">
        <div className="col-11 position-relative">
          <input placeholder="Search Tuiter"
                 className="form-control rounded-pill ps-5"/>
          <FontAwesomeIcon icon={faSearch} className="position-absolute wd-nudge-up" />
        </div>
        <div className="col-1">
          <FontAwesomeIcon icon={faGear} className="float-end wd-bottom-4 pos-relative fs-2 text-primary mt-1" />
        </div>
      </div>
      <ul className="nav nav-pills mb-2">
        <li className="nav-item">
          <a className="nav-link active" href="#ForYou">For You</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Trending">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#News">News</a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/starship.jpg" className="w-100" alt="starship"/>
        <h1 className="position-absolute wd-nudge-up text-white">
          SpaceX Starship</h1>
      </div>
      <PostSummaryList/>
    </>
  );
};
export default ExploreComponent;