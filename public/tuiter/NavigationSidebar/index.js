export const NavPages = {
  Tuiter: 'Tuiter',
  Home: 'Home',
  Explore: 'Explore',
  Navigation: 'Navigation',
  Messages: 'Messages',
  Bookmarks: 'Bookmarks',
  Lists: 'Lists',
  Profile: 'Profile',
  More: 'More'
}

const NavigationSidebar = (activePage) => {
  const reg = "list-group-item";
  const active = "list-group-item active";
  console.log(activePage);
  return (`
   <div class="list-group wd-nav">
     <a class="${activePage == NavPages.Tuiter ? active : reg}" href="#Tuiter">
       <i class="fab fa-twitter"></i>
       </a>
     <a class="${activePage == NavPages.Home ? active : reg}" href="#Home">
       <i class="fas fa-home"></i> 
       <p class="d-none d-xl-inline">Home</p> 
       </a>
     <a class="${activePage == NavPages.Explore ? active : reg}" href="#Explore">
       <i class="fas fa-hashtag"></i> 
       <p class="d-none d-xl-inline"> Explore </p> 
       </a>
     <a class="${activePage == NavPages.Navigation ? active : reg}" href="#Navigation">
       <i class="fas fa-bell"></i> 
       <p class="d-none d-xl-inline"> Navigation </p>
       </a>
     <a class="${activePage == NavPages.Messages ? active : reg}" href="#Messages">
       <i class="fas fa-envelope"></i> 
       <p class="d-none d-xl-inline"> Messages </p> 
       </a>
     <a class="${activePage == NavPages.Bookmarks ? active : reg}" href="#Bookmarks">
       <i class="fas fa-bookmark"></i> 
       <p class="d-none d-xl-inline"> Bookmarks </p>
       </a>
     <a class="${activePage == NavPages.Lists ? active : reg}" href="#Lists">
       <i class="fas fa-list"></i> 
       <p class="d-none d-xl-inline"> Lists </p>
       </a>
     <a class="${activePage == NavPages.Profile ? active : reg}" href="#Profile">
       <i class="fas fa-user"></i> 
       <p class="d-none d-xl-inline"> Profile </p> 
       </a>
     <a class="${activePage == NavPages.More ? active : reg}" href="#More">
       <i class="fas fa-circle-chevron-down"></i> 
       <p class="d-none d-xl-inline"> More </p>
       </a>
   </div>
   <div class="d-grid mt-2">
     <a href="#Tuit"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;