import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./PostSummaryList.js";
import PostListItems from "./PostItemList.js";

function exploreComponent() {
  $("#wd-explore").append(`
        <h2>Home</h2>
   <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar("Home")}
    </div>
    <div class="col-10 col-lg-7 col-xl-6">
        ${PostListItems()}
    </div>
    <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        ${ExploreComponent()}
    </div>
   </div>
    `);
}
$(exploreComponent);
