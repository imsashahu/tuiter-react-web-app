import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer.js";

const PostSummaryItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    console.log("Deleting", id);
    dispatch(deleteTuit(id));
  };

  return (
    <div className="border border-1 row">
      <div className="col-2 pt-2 ps-3 pe-0">
        <img
          src={`/images/${post.image}`}
          className="p-0 m-0 border-0 rounded-circle "
          width="60px"
          height="60px"
        />
      </div>
      <div className="col-10 pt-2">
        <div>
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}
          ></i>
          <span className="fw-bold text-black">{post.userName}</span>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "blue" }} />
          <span className="text-dark">
            {post.handle} · {post.time}
          </span>
        </div>
        <p className="text-black">{post.tuit}</p>
        <div className="text-dark mt-2 row">
          <div className="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faMessage} style={{ color: "gray" }} />
              <span className="ms-1">{post.replies}</span>
            </p>
          </div>
          <div className="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faRetweet} style={{ color: "gray" }} />
              <span className="ms-1">{post.retuits}</span>
            </p>
          </div>
          <div className="float-left w-25">
            <p>
              <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              <span className="ms-1">{post.likes}</span>
            </p>
          </div>
          <div className="float-left w-25">
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
