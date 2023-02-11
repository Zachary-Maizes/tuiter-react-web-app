import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (`
      <div class="row">
        <div class="wd-top-bar">
            <div class="position-relative">
                <div class="wd-searchbar p-2 mb-3">
                    <i class="fas fa-xl fa-fw fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search Tuiter" />
                </div>
                <div class="wd-settings-icon position-absolute end-0 top-0 me-1 mt-3">
                    <a href="explore-settings.html">
                        <i class="fa-fw fa-xl fa-solid fa-gear"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <ul class="nav nav-tabs mb-1">
        <li class="nav-item">
            <a class="nav-link p-2 active" href="for-you.html">
                For you
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-2" href="trending.html">
                Trending
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-2" href="news.html">
                News
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-2" href="sports.html">
                Sports
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-2" href="entertainment.html">
                Entertainment
            </a>
        </li>
    </ul>
      <div class="card">
          <img src="/public/images/spaceship.jpg" class="card-img-top">
          <div class="card-img-overlay d-flex align-items-end">
              <h4 class="card-title">SpaceX's Starship</h4>
          </div>
      </div>
      ${PostSummaryList()}
    
  `);
}
export default ExploreComponent;
