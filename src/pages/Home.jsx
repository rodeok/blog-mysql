import React from 'react'
import { Link } from 'react-router-dom'
import img from "../components/imgs/image.jpg"
function Home() {

  const posts = [
    {
      id: 1,
      title: "Post 1 ",
      desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: img   
     },
    {
      id: 2,
      title: "Post 2",
      desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: img   
    },
    {
      id: 3,
      title: "Post 3 ",
      desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      img: img
    },
  ]
  return (
       <div className="home">
        <div className="posts">
          {posts.map(post=>(
            <div className='post' key={post.id}>
              <div className="img">
                <img src={post.img} alt="img" />
              </div>
              <div className="contents">
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
                <Link to={`/post/${post.id}`}>
                  <button className='btn btn-success'>Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
       </div>
  )
}

export default Home