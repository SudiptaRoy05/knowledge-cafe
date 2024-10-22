import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookMarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmark] = useState([])

  const handleAddToBookMarks=(title)=>{
    setBookmark(title);
    console.log(bookmarks);
  }
  return (
    <>
      <Header></Header>
      <main className="w-10/12 mx-auto md:flex grid gap-6 mt-5">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <Bookmarks></Bookmarks>
        
      </main>
    </>
  );
}

export default App;
