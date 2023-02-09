import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="pt-1 pb-1">
        <div class="row">
            <div class="col-10 bg-light border-0 rounded-3 p-1 ms-1 me-1">
                <label for="searchtuitbox">
                    <i class="fa fa-magnifying-glass fa-l ms-2 me-1"></i>
                </label>
                <input type="text" class="bg-light border-0" width="90%"
                    placeholder="Search Twitter">
                </textarea>
            </div>

            <div class="col-1">
                <a href="explore-settings.html">
                    <i class="fa fa-gear fa-xl m-3" style="color: rgb(55, 138, 232);"></i>
                </a>
            </div>
        </div>
    </div>

    <ul class="nav nav-tabs nav-fill pt-1 pb-1">
        <li class="nav-item">
            <a class="nav-link active ps-0 pe-0" href="#" style="color: white;">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ps-0 pe-0" href="#" style="color: white;">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ps-0 pe-0" href="#" style="color: white;">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ps-0 pe-0" href="#" style="color: white;">Sports</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ps-0 pe-0 d-none d-md-block" href="#" style="color: white;">Entertainment</a>
        </li>
    </ul>

    <div class="row border-secondary card text-white">
        <img class="card-img p-0" src="../explore/logo/starship.png">
        <div class="card-img-overlay d-flex align-items-end">
            <h4 class="card-title">SpaceX's Starship</h4>
        </div>
    </div>
  ${PostSummaryList()}
    `;
};
export default ExploreComponent;
