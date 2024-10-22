import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookMarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmark] = useState([])

  const handleAddToBookMarks=(blog)=>{
    const {title} = blog
    const newBookMarks = [...bookmarks, title]
    setBookmark(newBookMarks);
  }
  return (
    <>
      <Header></Header>
      <main className="w-10/12 mx-auto md:flex grid gap-6 mt-5">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        
      </main>
    </>
  );
}

export default App;
