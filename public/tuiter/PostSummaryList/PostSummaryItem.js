const PostSummaryItem = (post) => {
  return `
  <div class="row pb-3 pe-3 p-3 border border-1 border-solid border-secondary">
    <div class="col-10">
        <div class="text-muted">${post.topic}</div>
        <div>
            <span class="font-weight-bold text-white">${post.userName}</span>
            <i class="fa fa-circle-check"></i>
            <span class="text-muted">· ${post.time}</span>
        </div>
        <div class="font-weight-bold text-white">${post.title}</div>
    </div>
    <div class="col-2 d-flex justify-items-center align-items-start">
      <img src="../explore/logo/${post.image}" class="p-0 mt-2 rounded-3" width="100%" height="auto" />
    </div>
  </div>`;
};

export default PostSummaryItem;
