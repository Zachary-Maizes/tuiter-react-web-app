const WhoToFollowListItem = (who) => {
  return (`
    <li class="position-relative">
      <img class="wd-profile-img ms-1 mt-1" src="/images/${who.avatarIcon}" />
      <div>
          <h2>${who.userName}</h2>
          <p>@${who.handle}</p>
      </div>
      <button class="position-absolute mt-2 me-1 end-0">Follow</button>
    </li>
  `);
}

export default WhoToFollowListItem;