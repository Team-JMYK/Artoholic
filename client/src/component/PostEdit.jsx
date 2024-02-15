import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; //Import styles
import "../styles/PostEdit.css"

const PostEdit = () => {
    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
      };
    
    return (
        <>
        <div className='richText'>
        <ReactQuill className='react-quill'
          theme="snow"
          value={content}
          onChange={handleChange}
        />
        </div>
      </>
    )
}

export default PostEdit;