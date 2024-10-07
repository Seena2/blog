import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  //get the id of the blog
  const { id } = useParams();
  //get data from custom "useFetch" hook
  //the colon is for alias name
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  //histrory or navigation hook
  const navigate = useNavigate();

  const handleDelete = (e) => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Deleted the blog");
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {pending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            <u>Written by -{blog.author} </u>
            {blog.date && <span> -Published on: {blog.date}</span>}
          </p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
