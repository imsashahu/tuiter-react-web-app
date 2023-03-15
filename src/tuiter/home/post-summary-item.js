import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer.js";

const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    time: "2h",
    image: "spacex.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div class="border border-1 row">
      <div class="col-2 pt-2 ps-3 pe-0">
        <img
          src={`/images/${post.image}`}
          class="p-0 m-0 border-0 rounded-circle "
          width="60px"
          height="60px"
        />
      </div>
      <div class="col-10 pt-2">
        <div>
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <span class="fw-bold text-black">{post.userName}</span>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "blue" }} />
          <span class="text-dark">
            {post.handle} · {post.time}
          </span>
        </div>
        <p class="text-black">{post.tuit}</p>
        <div class="text-dark mt-2 row">
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faMessage} style={{ color: "gray" }} />
              <span class="ms-1">{post.replies}</span>
            </p>
          </div>
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faRetweet} style={{ color: "gray" }} />
              <span class="ms-1">{post.retuits}</span>
            </p>
          </div>
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              <span class="ms-1">{post.likes}</span>
            </p>
          </div>
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faShareNodes} style={{ color: "gray" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostSummaryItem;
