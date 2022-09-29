import React from 'react'
import img from "../components/imgs/image.jpg"
import img2 from "../components/imgs/image1.jpg"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
function Single() {
  return (
    <div className='single'>
      <div className="content">
            <img src={img} alt="img" />
            <div className="user">
              <img src={img2} className="profile-img" alt="im2" />
              <div className="info">
                <span className="username">John</span>
                <p>Posted 2 days ago</p>
              </div>
              <div className='edit'>
                <Link to={`/write?edit=2`}>
                  {/* <img src={edit} alt="edit" className='ed'/> */}
                  <button className='btn btn-primary'>Edit</button>
                </Link>
                <Link to={`/`}>
                {/* <img src={del} alt="edit" className='del'/> */}
                <button className='btn btn-danger'>delete</button>
                </Link>
                
              </div>
            </div>
            <h1 className='single-text'> Test </h1>
            <p className='single-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, error ducimus. Officiis velit corrupti beatae at repudiandae sunt. Excepturi laborum animi, suscipit expedita aut quis eius obcaecati similique rerum commodi!</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
