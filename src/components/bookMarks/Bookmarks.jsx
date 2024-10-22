import PropTypes from "prop-types";
export default function Bookmarks({bookmarks}) {
  return (
    <div className="md:w-1/3">
        <h2>{bookmarks}</h2>
    </div>
  )
}


Bookmarks.propTypes = {
  // blog: PropTypes.object.isRequired,
  bookmarks: PropTypes.object.isRequired,
};