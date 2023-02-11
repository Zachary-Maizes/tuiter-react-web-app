import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
  <ul class="list-group wd-who-to-follow-list">
    <li>
      <h1> Who to Follow </h1>
    </li>
    ${who.map(WhoToFollowListItem).join(' ')}
  </ul>
  `);
};

export default WhoToFollowList;