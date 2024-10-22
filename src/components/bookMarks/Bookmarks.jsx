import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
export default function Bookmarks({bookmarks}) {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded">
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
};