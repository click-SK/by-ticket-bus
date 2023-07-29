import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import EditFaq from './EditFaq';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
const FaqListItem = ({item, setReloadState}) => {
    const [isOpenPostItem, setIsOpenPostItem] = useState(false);

    const handleRemovePost = async () => {
      axios.delete(`${API_URL}/remove-faq-post`, {
        data: {
          id: item._id
        },
      }).then(() => {
        setTimeout(() => {
            setReloadState((state) => !state);
        },500)
      })
    }
    return (
      <div className="table_info_item">
        <p
          onClick={() => setIsOpenPostItem(!isOpenPostItem)}
          className="colum row colum_name table_partner-item"
        >
          {item.titleEn}
        </p>
        <p className="colum row colum_progres table_partner-item"> {item.createdAt}</p>
        <div className="colum row colum_progres table_partner-item">
        <p onClick={handleRemovePost}> X</p>
        </div>
        {isOpenPostItem && 
        <EditFaq
        item={item}
        setReloadState={setReloadState}
        isOpenPostItem={isOpenPostItem}
        setIsOpenPostItem={setIsOpenPostItem}/>}
      </div>
    );
  
};

export default FaqListItem;