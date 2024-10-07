import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  //States to store input field values
  const [title, setTitle] = useState("");
  const [highlight, setHighlight] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("John");
  const [date, setDatePublished] = useState("");
  //initial value is set to false:b/c when we first load the page, we are NOT making that request
  //straight away, it is only after we submit the form
  const [isPending, setIsPending] = useState(false);

  //Redirecting
  //const history = useNavigate(); //for versions before 6.4
  const navigate = useNavigate();

  const handleSabmit = (e) => {
    //prefent the default form submition action(which also prevent page to refresh)
    e.preventDefault();
    //create object to hold all the data to be submitted
    const blog = { title, date, highlight, body, author };
    console.log(blog);

    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog Added");
      setIsPending(false);
      //for versions before 6.4
      // history.go(-1);
      //history.push("/");
      //afte version6.4
      navigate("/");
    });
  };

  return (
    <div className="create-blog">
      <Form onSubmit={handleSabmit}>
        <h2>Create New Blog</h2>
        <label htmlFor="">
          Blog title:
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Blog Highligh:
          <textarea
            required
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Blog body:
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Blog Author:
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="John Doe">John Doe</option>
            <option value="Tabor Wami">Tabor Wamii</option>
            <option value="Kenenisa Bekele">Kenenisa Bekele</option>
          </select>
        </label>
        <label htmlFor="">
          Date Published:
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDatePublished(e.target.value)}
          />
        </label>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </Form>
      <div className="blog-display">
        <h4>Blog Details</h4>
        {title && (
          <p>
            <b>Title</b>: {title}
          </p>
        )}
        <span>
          {highlight && (
            <p>
              <b>Highlight</b>: {highlight}
            </p>
          )}
        </span>
        {body && (
          <p>
            <b>Blog body</b>: {body}
          </p>
        )}
        <span>
          {author && (
            <p>
              <b>Author</b>:{author}
            </p>
          )}
        </span>
        <span>
          {date && (
            <p>
              <b>Date published</b>:{date}
            </p>
          )}
        </span>
      </div>
    </div>
  );
};

export default CreateBlog;
