import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostSummaryItem from "../home/post-summary-item.js";
import { findTuitsThunk } from "../../services/tuits-thunks.js";

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  console.log("[tuits]", tuits, "[loading]", loading);

  return (
    <div>
      {loading && <li className="list-group-item">Loading...</li>}

      {tuits.map((tuit) => (
        <PostSummaryItem key={tuit._id} post={tuit} />
      ))}
    </div>
  );
};

export default TuitsList;
