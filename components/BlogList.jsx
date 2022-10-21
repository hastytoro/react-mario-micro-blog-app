import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ id, title, body, author }) => (
        <div key={id} className="blog-preview">
          <Link to={`/blogs/${id}`}>
            <h2>{title}</h2>
            <p>Written by: {author}</p>{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
