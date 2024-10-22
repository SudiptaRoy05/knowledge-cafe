import PropTypes from 'prop-types';

export default function Blog({blog}) {
    console.log(blog);
  return (
    <div>Blog</div>
  )
}

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}