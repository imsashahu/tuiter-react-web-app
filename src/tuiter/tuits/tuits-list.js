import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem from "../home/post-summary-item.js";

const TuitsList = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <div>
      {tuits.map((tuit) => (
        <PostSummaryItem key={tuit._id} post={tuit} />
      ))}
    </div>
  );
};

export default TuitsList;
