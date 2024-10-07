import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  //const blogs = props.blogs;
  //const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>by {blog.author}</p>
          <p>{blog.date}</p>
          <p>{blog.highlight}</p>
          <Link to={`/blogs/${blog.id}`}>Read More ...</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
