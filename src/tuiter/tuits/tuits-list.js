import React from "react";
import PostSummaryItem from "../home/post-summary-item.js";
import tuits from "./tuits.json";

const TuitsList = () => {
  return (
    <div>
      {tuits.map((tuit) => (
        <PostSummaryItem key={tuit._id} post={tuit} />
      ))}
    </div>
  );
};

export default TuitsList;
