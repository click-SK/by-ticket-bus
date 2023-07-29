import React, { useEffect, useState, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { API_URL } from "../../../http/baseUrl";
import EditBlog from './EditBlog';

const PostListItem = ({ item, setReloadState }) => {
  const [isOpenPostItem, setIsOpenPostItem] = useState(false);

  const handleRemovePost = () => {
    axios
      .delete(`${API_URL}/remove-blog-post`, {
        data: {
          id: item._id,
          filename: item.blogImage,
        },
      })
      .then(() => {
        setTimeout(() => {
          setReloadState((state) => !state);
        }, 500);
      });
  };

  return (
    <div className="table_info_item">
      <p
        onClick={() => setIsOpenPostItem(!isOpenPostItem)}
        className="colum row colum_name table_partner-item"
      >
        {item.titleEn}
      </p>
      <p className="colum row colum_progres table_partner-item">
        {" "}
        {item.createdAt}
      </p>
      <p
        className="colum row colum_progres table_partner-item"
        onClick={handleRemovePost}
      >
        {" "}
        X
      </p>
      {isOpenPostItem && 
      <EditBlog 
      item={item}
      setIsOpenPostItem={setIsOpenPostItem}
      isOpenPostItem={isOpenPostItem}
      setReloadState={setReloadState}/>}
    </div>
  );
};

export default PostListItem;
