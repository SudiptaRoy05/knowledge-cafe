import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({handleAddToBookMarks, handleMarkAsReadBtn}) {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
  return (
    <div className="w-2/3">
        <h3 className="text-4xl">Blogs: {blogs.length}</h3>
        {
            blogs.map(blog => <Blog 
                key={blog.id} 
                blog ={blog}
                handleAddToBookMarks={handleAddToBookMarks}
                handleMarkAsReadBtn={handleMarkAsReadBtn}
                ></Blog>)
        }
    </div>
  )
}

Blogs.propTypes = {
  // blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func.isRequired,
  handleMarkAsReadBtn:PropTypes.func.isRequired
};