const NavigationSidebar = (active) => {
  return `
  <div>
      <div class="list-group">
          <a class="list-group-item border-0">
              <i class="fab fa-t float-left p-1" style="color: rgb(55, 138, 232);"></i>
          </a>
          <a href="../HomeScreen/index.html" class="list-group-item border-0 ${
            active === "Home" ? "active" : ""
          }">
              <i class="fa fa-home float-left p-1 me-2"></i>
              <span class="d-none d-xl-block float-left"> Home</span>
              <div class="float-done"></div>
          </a>
          <a href="../explore/index.html" class="list-group-item border-0 ${
            active === "Explore" ? "active" : ""
          }">
              <i class="fa fa-hashtag float-left p-1 me-2"></i>
              <span class="d-none d-xl-block float-left"><b> Explore</b></span>
              <div class="float-done"></div>
          </a>
          <a href="#" class="list-group-item border-0 ${
            active === "Notification" ? "active" : ""
          }">
              <i class="fa fa-bell float-left p-1 me-2"></i>
              <span class="d-none d-xl-block float-left"> Notification</span>
              <div class="float-done"></div>
          </a>
          <a href="#" class="list-group-item border-0 ${
            active === "Messages" ? "active" : ""
          }">
              <i class="fa fa-envelope float-left me-2 p-1"></i>
              <span class="d-none d-xl-block float-left"> Messages</span>
              <div class="float-done"></div>
          </a>
          <a href="#" class="list-group-item border-0 ${
            active === "Bookmarks" ? "active" : ""
          }">
              <i class="fa fa-bookmark float-left me-2 p-1"></i>
              <span class="d-none d-xl-block float-left"> Bookmarks</span>
              <div class="float-done"></div>
          </a>
          <a href="#" class="list-group-item border-0 ${
            active === "Lists" ? "active" : ""
          }">
              <i class="fa fa-list float-left me-2 p-1"></i>
              <span class="d-none d-xl-block float-left"> Lists</span>
              <div class="float-done"></div>
          </a>
          <a href="#" class="list-group-item border-0 ${
            active === "Profile" ? "active" : ""
          }">
              <i class="fa fa-user float-left me-2 p-1"></i>
              <span class="d-none d-xl-block float-left"> Profile</span>
              <div class="float-done"></div>
          </a>
          <a href="#" class="list-group-item border-0 ${
            active === "More" ? "active" : ""
          }">
              <i class="fa fa-ellipsis float-left me-2 p-1"></i>
              <span class="d-none d-xl-block float-left"> More</span>
              <div class="float-done"></div>
          </a>
      </div>
      <div>
        <botton class="btn btn-primary mt-2 w-100">
            Tweet
        </botton>
      </div>
  </div>

    `;
};

export default NavigationSidebar;
