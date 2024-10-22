import PropTypes from 'prop-types';
export default function Bookmark({bookmark}) {
  return (
    <div>
        <p className="bg-white mx-2 my-4 rounded p-3 font-bold">{bookmark}</p>
    </div>
  )
}


Bookmark.propTypes = {
    // blog: PropTypes.object.isRequired,
    bookmark: PropTypes.array.isRequired,
  };