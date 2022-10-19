const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ title, body, author, id }) => (
        <div key={id} className="blog-preview">
          <h2>{title}</h2>
          <p>Written by: {author}</p>
          <p>{body}</p>
          <button onClick={() => handleDelete(id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
