const PostSummaryItem = (post) => {
  return(`
    <div class="card wd-tuit row m-0">
      <div class="card-body col-9">
          ${post.topic && (`<h3>${post.topic}</h3>`)}
          <div>
              ${post.userName ? (`<h1 class="d-inline">${post.userName}</h1> <h3 class="d-inline"> -`) : (`<h3>`)}  ${post.time}</h3>
          </div>
          <h2>${post.title}</h2>
      </div>
      <img class="col-3 position-absolute end-0 me-2 top-0 mt-1 p-0" src="/images/${post.image}" />
  </div>
  `);
};

export default PostSummaryItem;