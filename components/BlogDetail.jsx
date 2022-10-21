import { useParams } from "react-router-dom";
import useFetch from "../src/hooks/useFetch";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, loading, error] = useFetch(
    `http://localhost:8000/blogs/${slug}`
  );
  console.log(loading);
  return (
    <div className="blog-details">
      {/* Below we condition render/template with a JS && AND logical operator.
      It works because in JS, true && expression always evaluates the expression
      but if false on the left side, then the expression always evaluate false.
      And does not even bother with the right-side of the evaluation. */}
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error.message}</h3>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
