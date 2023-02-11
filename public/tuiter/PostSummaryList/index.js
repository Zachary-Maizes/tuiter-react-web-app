import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return (`
    <div>
        ${posts.map(PostSummaryItem).join(' ')}
    </div>
  `);
};

export default PostSummaryList;