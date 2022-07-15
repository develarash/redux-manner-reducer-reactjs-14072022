import React from "react";
import {PostDetaile} from "./PostDetaile";
import { useSelector } from "react-redux";

export const  PostList =()=>{
const {posts}=useSelector(state=>state  );
    return (
      <div className="container">
        <div className="row">
          { posts && posts.map(post=><PostDetaile post={post}key={post.id} />) }
        </div>
      </div>
    );
  }

