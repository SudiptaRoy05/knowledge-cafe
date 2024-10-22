import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookMarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmark] = useState([])
  const [markAsRead, setMarkAsRead] = useState(0)

  const handleAddToBookMarks=(blog)=>{
    // const {title} = blog
    const newBookMarks = [...bookmarks, blog]
    setBookmark(newBookMarks);
  }

  const handleMarkAsReadBtn=(id, time)=>{
    setMarkAsRead(markAsRead+Number(time))
    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id);
    setBookmark(remainingBookmarks);
    
  }
  return (
    <>
      <Header></Header>
      <main className="w-10/12 mx-auto md:flex grid gap-6 mt-5">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}
        handleMarkAsReadBtn={handleMarkAsReadBtn}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
        markAsRead={markAsRead}
        ></Bookmarks>
        
      </main>
    </>
  );
}

export default App;
