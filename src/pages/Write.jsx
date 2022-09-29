import React, { useState } from 'react';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./write.css"
const Write = () => {
    const [value, setValue] = useState(" ")
    console.log(value)
    return (
     <div className="write">
        <div className="content">
            <input type="text" placeholder='Title' />
              <div className="editorContainer">
                <ReactQuill theme='snow' value={value} onChange={setValue} className="editor"/>
              </div>
         </div>
        <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status:</b> Draft
                </span>
                <span>
                    <b>Visibility: </b> Public
                </span>
                <input type="file" id='file' name='' style={{display:"none"}}/>
                <label className='file' htmlFor="file">Upload Image</label>
                <div className="buttons">
                    <button className='btn-save'>Save as a draft</button>
                    <button className='btn-update'>update</button>
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <div className="cat">
                <input type="radio" name='cat' value="art" id="art" />
                <label htmlFor="art">Art</label>           
                </div>
            <div className="cat">
                <input type="radio" name='cat' value="art" id="art" />
                <label htmlFor="science">Science</label>
            </div>
               <div className="cat">
               <input type="radio" name='cat' value="code" id="art" />
                <label htmlFor="code">Coding</label>  
               </div>

            </div>
        </div>
     </div>
    );
    };
export default Write;    