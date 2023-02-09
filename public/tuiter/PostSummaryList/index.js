import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummary = () => {
  return `
  <ul class="list-group">
    ${exploreItems
      .map((post) => {
        return PostSummaryItem(post);
      })
      .join("")}
  </ul>`;
};

export default PostSummary;
