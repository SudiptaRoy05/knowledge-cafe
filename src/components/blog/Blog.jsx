import PropTypes from "prop-types";

export default function Blog({ blog }) {
  const { title, cover, author, author_img, posted_date, reading_time, hashTags } = blog;
  console.log(blog);
  return (
    <div className="">
      <img src={cover} alt={`cover pic ${title}`}></img>
      <div className="flex justify-between items-center py-5">
        <div className="flex juxtify-between items-center gap-3">
          <img
            className="w-12 "
            src={author_img}
            alt={`cover pic ${title}`}
          ></img>
          <div>
          <p className="font-bold">{author}</p>
          <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <p className="text-3xl font-bold">{title}</p>
      <p className="mb-8">
        {
          hashTags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
        }
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
