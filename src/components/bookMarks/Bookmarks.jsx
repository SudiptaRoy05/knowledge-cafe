import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
export default function Bookmarks({bookmarks, markAsRead}) {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded">
      <div className="rounded border border-purple-800 py-5 px-2 bg-white text-purple-800 font-bold">
        <h3>Spent time on read : {markAsRead}</h3>
      </div>
        <h2 className="text-xl font-bold p-3">Bookmarked Blogs : {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }

    </div>
  )
}


Bookmarks.propTypes = {
  // blog: PropTypes.object.isRequired,
  bookmarks: PropTypes.array.isRequired,
  markAsRead:PropTypes.number
};