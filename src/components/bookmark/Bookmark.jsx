import PropTypes from 'prop-types';
export default function Bookmark({bookmark}) {
    const {title} = bookmark
  return (
    <div>
        <p className="bg-white mx-2 my-4 rounded px-3 py-5 font-bold">{title}</p>
    </div>
  )
}


Bookmark.propTypes = {
    // blog: PropTypes.object.isRequired,
    bookmark: PropTypes.array.isRequired,
  };