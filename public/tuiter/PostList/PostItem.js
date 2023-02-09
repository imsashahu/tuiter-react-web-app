const PostItem = (post) => {
  return `
        <div class=" border border-1 border-secondary bg-transparent row">
            <div class="col-2 pt-2 ps-3 pe-0">
                <img src="../bookmarks/${post.profilepic}" class="p-0 m-0 border-0 rounded-circle " width="60px" height="60px"/>
            </div>

            <div class="col-10 pt-2">
                <div>
                    <span class="fw-bold text-white">${post.sender}</span>
                    <i class="fa fa-circle-check"></i>
                    <span class="text-dark">@${post.userName} · ${post.time}</span>
                    <span class="float-end text-dark">···</span>
                </div>

                <p class="text-white">${post.post}</p>

                <div class="rounded-3 border border-1 border-secondary">
                    <img src="../bookmarks/${post.image}" width="100%" class="rounded-3"/>
                    <div>
                        <p class="m-2 text-white">${post.imageTitle}</p>
                        <p class="text-dark m-2">${post.imageContent}</p>
                    </div>
                </div>

                <div class="text-dark mt-2">
                    <div class="float-left w-25">
                        <p>
                            <i class="fa fa-message"></i>
                            <span class="ms-1">${post.comment}</span>
                        </p>
                    </div>

                    <div class="float-left w-25">
                        <p>
                            <i class="fa fa-retweet"></i>
                            <span class="ms-1">${post.retweet}</span>
                        </p>
                    </div>

                    <div class="float-left w-25">
                        <p>
                            <i class="fa fa-heart"></i>
                            <span class="ms-1">${post.like}</span>
                        </p>
                    </div>

                    <div class="float-left w-25">
                        <p>
                            <i class="fa fa-inbox"></i>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    `;
};

export default PostItem;
