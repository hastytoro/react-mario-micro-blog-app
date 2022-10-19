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

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const initialState = [
  {
    title: "Ciao ragazzi",
    body: "lorem ipsum...",
    author: "mario",
    id: 1,
  },
  {
    title: "Welcome guys",
    body: "lorem ipsum...",
    author: "yoshi",
    id: 2,
  },
  {
    title: "Get those stars",
    body: "lorem ipsum...",
    author: "mario",
    id: 3,
  },
];

/* # Props: 
Its a way of providing read-only data/sate from a parent component to a wrapped
child component, that it encloses over. Below we pass the state as a prop. Now
the blogs array state is going to be accessible on the props object. The child
component can destructure that property directly for use.
*/
const Home = () => {
  const [blogs, setBlogs] = useState(initialState);
  const [count, setCount] = useState(0);
  const filterList = (name) => blogs.filter((blog) => blog.author === name);
  // Below we flip the flag with `!` so any value that is `false` is truthy.
  // So we return all items in the array that don't match with the id.
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((item) => item.id !== id);
    setBlogs(newBlogs);
  };
  /* # Warning: Avoid `useEffect` infinite loops: 
  Passing an empty dependency argument means that if you update any state in
  the effect callback, its going to invoke infinitely. Because its updating
  state that is re-rendering (update) the component, it keeps triggering.
  After initial render, useEffect runs the side-effect callback that updates
  ```jsx
  useEffect(() => {
    console.log("effect callback triggered");
    setCount(count + 1);
    console.log(count); // infinite
  });
  ```
  the state. That triggers re-rendering that triggers another effect callback
  and again updates state again etc.... The infinite loop is fixed by correct
  management of the useEffect(callback, dependencies) dependencies argument. */
  useEffect(() => {
    console.log("effect callback triggered");
    setCount(count + 1);
    console.log(count);
  }, []); // ok, we going to run on each mount only.
  return (
    <div className="home">
      <h1>{count}</h1>
      <BlogList
        blogs={blogs}
        title="All the Blogs!"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={filterList("mario")}
        title="Mario's Blogs!"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
