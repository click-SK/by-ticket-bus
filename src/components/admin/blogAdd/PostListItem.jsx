import React, { useEffect, useState } from "react";
import { FcEditImage } from "react-icons/fc";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostListItem = ({ item }) => {
  const [isOpenPostItem, setIsOpenPostItem] = useState(false);
  const [isEditTextEng, setIsEditTextEng] = useState(false);
  const [contentSpain, setContentSpain] = useState("");
  const [contentEng, setContentEng] = useState("");
  const [isEngVar, setIsEngVar] = useState(true);
  const [isSpVar, setIsSpVar] = useState(false);
  const [titleEng, setTitleEng] = useState("");
  const [titleSpain, setTitleSpain] = useState("");

  const handleShowSp = () => {
    setIsEngVar(false);
    setIsSpVar(true);
  };

  const handleShowEng = () => {
    setIsEngVar(true);
    setIsSpVar(false);
  };

  const handleChangeEng = (value) => {
    setContentEng(value);
  };
  const handleChangeSpain = (value) => {
    setContentSpain(value);
  };
  return (
    <div className="table_info_item">
      <p
        onClick={() => setIsOpenPostItem(!isOpenPostItem)}
        className="colum row colum_name table_partner-item"
      >
        {item.titleEng}
      </p>
      <p className="colum row colum_progres table_partner-item"> {item.date}</p>
      {isOpenPostItem && (
        <div className="post_item_wrap">
          <FcEditImage onClick={() => setIsEditTextEng(!isEditTextEng)} />
          <img className="img_post_item_wrap" src={item.img} alt="" />

            {!isEditTextEng ? 
                          <div className="item_content_blog">
                          <p>Eng post </p> 
                        <div>{item.date}</div>
                        <h4 className="item_content_blog-title">{item.titleEng}</h4>
                        <div className="item_text">
                          {item.textEng}          
                        </div>
                        <p style={{marginTop: 20}}>ESP post </p> 
                        <h4>{item.titleSpian}</h4>
                        <div className="item_text">
                          {item.textSpain}          
                        </div>
                        </div>
              //         <ReactQuill
              //         className='text_area'
              //         value={item.textEng}
              //         onChange={handleChangeEng}
              //         placeholder="Write your blog article here..."
              //         modules={{
              //             toolbar: [
              //             [{ header: [1, 2, 3, 4, 5, 6, false] }],
              //             ['bold', 'italic', 'underline', 'strike'],
              //             [{ list: 'ordered' }, { list: 'bullet' }],
              //             ['blockquote', 'code-block'],
              //             [{ color: [] }, { background: [] }],
              //             [{ align: [] }],
              //             ['link'],
              //             ['clean'],
              //             ],
              //         }}
              //         formats={[
              //             'header',
              //             'bold',
              //             'italic',
              //             'underline',
              //             'strike',
              //             'list',
              //             'bullet',
              //             'blockquote',
              //             'code-block',
              //             'color',
              //             'background',
              //             'align',
              //             'link',

              //         ]}
              //         />

              // } 
              :
              <div className="edit_wrap_blog-item">
                <div className="blog_tabs_btn">
                  <button
                    onClick={handleShowEng}
                    className={`admin_panel_items add_user_button btn_tabs ${
                      isEngVar ? "btn_tabs-active" : ""
                    }`}
                  >
                    ENG
                  </button>
                  <button
                    onClick={handleShowSp}
                    className={`admin_panel_items add_user_button btn_tabs ${
                      isEngVar ? "" : "btn_tabs-active"
                    }`}
                  >
                    ESP
                  </button>
                </div>
                {isEngVar && (
                  <>
                    <div className="add_title_item">
                      <label htmlFor="title_eng_input">Title eng</label>
                      <input
                        id="title_eng_input"
                        value={titleEng}
                        type="text"
                        onChange={(e) => setTitleEng(e.target.value)}
                      />
                    </div>
                    <div className="add_text_item">
                      <h4>Eng text</h4>
                      <ReactQuill
                        value={contentEng}
                        onChange={handleChangeEng}
                        placeholder="Write your blog article here..."
                        modules={{
                          toolbar: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["blockquote", "code-block"],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["link"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "bold",
                          "italic",
                          "underline",
                          "strike",
                          "list",
                          "bullet",
                          "blockquote",
                          "code-block",
                          "color",
                          "background",
                          "align",
                          "link",
                        ]}
                      />
                    </div>
                  </>
                )}
                {isSpVar && (
                  <>
                    <div className="add_title_item">
                      <label htmlFor="title_spain_input">Title spain</label>
                      <input
                        id="title_spain_input"
                        value={titleSpain}
                        type="text"
                        onChange={(e) => setTitleSpain(e.target.value)}
                      />
                    </div>
                    <div className="add_text_item">
                      <h4>Spain text</h4>
                      <ReactQuill
                        value={contentSpain}
                        onChange={handleChangeSpain}
                        placeholder="Write your blog article here..."
                        modules={{
                          toolbar: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["blockquote", "code-block"],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["link"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "bold",
                          "italic",
                          "underline",
                          "strike",
                          "list",
                          "bullet",
                          "blockquote",
                          "code-block",
                          "color",
                          "background",
                          "align",
                          "link",
                        ]}
                      />
                    </div>
                  </>
                )}
              </div>
            }

          <div className="btn_faq_item_wrap">
            <button className="admin_panel_items add_user_button active_btn_user">
              Publish
            </button>
            <button
              onClick={() => setIsOpenPostItem(!isOpenPostItem)}
              className="admin_panel_items add_user_button active_btn_user btn_cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostListItem;
