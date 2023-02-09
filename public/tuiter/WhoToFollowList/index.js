import whos from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
  <ul class="list-group">
  <li class="list-group-item bg-light border-0"><b>Who to follow</b></li>
    ${whos
      .map((who) => {
        return WhoToFollowListItem(who);
      })
      .join("")}
  </ul>
    `;
};
export default WhoToFollowList;
