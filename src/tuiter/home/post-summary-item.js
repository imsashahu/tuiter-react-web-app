import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem = ({
  post = {
    avatar: "spacex.png",
    name: "SpaceX",
    login: "SpaceX",
    time: "23h",
    content:
      "Dennis and Akiko Tito are the first two crewmembers on Starship second commercial spaceflight around the Moon.",
    image: "post_spacex.jpeg",
    imageTitle: "",
    imageContent: "",
    comment: "595",
    retweet: "1,168",
    like: "11.1k",
  },
}) => {
  return (
    <div class="border-top border-gray row">
      <div class="col-2 pt-2 ps-3 pe-0">
        <img
          src={`/images/${post.avatar}`}
          class="p-0 m-0 border-0 rounded-circle "
          width="60px"
          height="60px"
        />
      </div>
      <div class="col-10 pt-2">
        <div>
          <span class="fw-bold text-black">{post.name}</span>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "blue" }} />
          <span class="text-dark">
            @{post.login} · {post.time}
          </span>
          <span class="float-end text-dark">···</span>
        </div>
        <p class="text-black">{post.content}</p>
        <div class="rounded-3 border border-1 border-gray">
          <img src={`/images/${post.image}`} width="100%" class="rounded-3" />
          <div>
            <p class="m-2 text-black">{post.imageTitle}</p>
            <p class="text-dark m-2">{post.imageContent}</p>
          </div>
        </div>
        <div class="text-dark mt-2 row">
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faMessage} style={{ color: "gray" }} />
              <span class="ms-1">{post.comment}</span>
            </p>
          </div>
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faRetweet} style={{ color: "gray" }} />
              <span class="ms-1">{post.retweet}</span>
            </p>
          </div>
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
              <span class="ms-1">{post.like}</span>
            </p>
          </div>
          <div class="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faInbox} style={{ color: "gray" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostSummaryItem;
