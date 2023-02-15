import React from "react";
import PostSummaryItem from "./post-summary-item.js";
import posts from "./posts.json";

const HomeComponent = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </div>
  );
};
export default HomeComponent;
