// src/Pages/Posts/PostsExployer.jsx
import React from "react";
// import PostsContExplore from './PostsContExplore';
import styles from './Posts.module.css';
function PostsExplore() {
  console.log("Post in Posts component:");
  return (
    <div className={styles.modalOverlay} >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.postCon}>
          {/* <PostsContExplore post={post} /> Передаем post в PostCont */}
        </div>
        <button className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}
export default PostsExplore;