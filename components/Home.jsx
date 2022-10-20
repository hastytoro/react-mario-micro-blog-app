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

const initialState = null;

/* # Props: 
Its a way of providing read-only data/sate from a parent component to a wrapped
child component, that it encloses over. Below we pass the state as a prop. Now
the blogs array state is going to be accessible on the props object. The child
component can destructure that property directly for use.
*/
const Home = () => {
  const [blogs, setBlogs] = useState(initialState);
  const [count, setCount] = useState(0);
  const [isPending, setIsPending] = useState(true);

  const filterList = (name) => blogs.filter((blog) => blog.author === name);
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
    // Here we simulate the side-effect:
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
      setIsPending(false);
    }, 1000);
    setCount(count + 1);
    console.log("iteration count in effect callback", count);
  }, []); // ok, we going to run on each mount only.
  console.log("state: ", blogs);
  return (
    <div className="home">
      <h1>Render amount: {count} (temp)</h1>
      {/* Below we condition render/template with a JS && AND logical operator.
      It works because in JS, true && expression always evaluates the expression
      but if false on the left side, then the expression always evaluate false.
      And does not even bother with the right-side of the evaluation. */}
      {isPending && <h3>Loading...</h3>}
      {blogs && (
        <>
          <BlogList blogs={blogs} title="All the Blogs!" />
          <BlogList blogs={filterList("mario")} title="Mario's Blogs!" />
        </>
      )}
    </div>
  );
};

export default Home;
