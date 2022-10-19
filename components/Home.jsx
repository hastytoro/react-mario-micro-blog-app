/* # Events and callback handlers: 
Most of the time your not going to invoke your callback reference straight away
when your component render (mount) or re-render (update). Because that means the
function call is going to occur automatically without any user interaction. You
instead need to just pass it by reference, so that it needs user interaction.

```jsx
<button onClick={handleClick()}>Click me</button> // ❌
<button onClick={handleClick}>Click me</button> // ✅
```

But what happens if you want to pass the function any arguments from the event?
Well then you need to nest it within a outer function. Below we wrapping inline
via an anonymous/nameless arrow function, in our JSX.

```jsx
<button onClick={handleClick}>Click me</button> // ❌
<button onClick={() => handleClick("james bond")}>Click me</button> // ✅
```
Lastly automatically we get event parameter passed into callback handlers from
event handlers like onClick or onChange etc... 

For more information, see https://reactjs.org/docs/events.html

```jsx
const Home = () => {
  const handleClickOne = (e) => console.log(e);
  const handleClickTwo = (name, e) => console.log(name, e);
  return (
    <div className="home">
      <h2>Home page</h2>
      <button onClick={handleClickOne}>Click me</button> // ✅
      <button onClick={(e) => handleClickTwo("tim", e)}>Click me</button> // ✅
    </div>
  );
};
```
But if you need to pass in arguments and that is likely the setup needed in most
callback function, you then need that inline arrow setup passing along event.
`
*/

import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Ciao ragazzi 🍄",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome guys 🐢",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Get those stars ⭐️",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map(({ title, body, author, id }) => (
        <div key={id} className="blog-preview">
          <h2>{title}</h2>
          <p>Written by: {author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
