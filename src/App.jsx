import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookMarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="w-10/12 mx-auto md:flex grid">
       
        <Blogs></Blogs>
       
        <Bookmarks></Bookmarks>
        
      </main>
    </>
  );
}

export default App;
