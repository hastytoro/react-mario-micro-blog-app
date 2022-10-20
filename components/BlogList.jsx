const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ title, body, author, id }) => (
        <div key={id} className="blog-preview">
          <h2>{title}</h2>
          <p>Written by: {author}</p>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
