import { useEffect } from "react";
import { useState } from "react"

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
  return (
    <div>
        <h3>Blogs: {blogs.length}</h3>
    </div>
  )
}
