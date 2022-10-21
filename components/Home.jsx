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
import BlogList from "./BlogList";
import useFetch from "../src/hooks/useFetch";

/* # Props: 
Its a way of providing read-only data/sate from a parent component to a wrapped
child component, that it encloses over. Below we pass the state as a prop. Now
the blogs array state is going to be accessible on the props object. The child
component can destructure that property directly for use.
*/
const Home = () => {
  // const {data: blogs, loading, error} = useFetch("http://localhost:8000/blogs");
  const [blogs, loading, error] = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {/* Below we condition render/template with a JS && AND logical operator.
      It works because in JS, true && expression always evaluates the expression
      but if false on the left side, then the expression always evaluate false.
      And does not even bother with the right-side of the evaluation. */}
      {error && <h3>Error: {error}</h3>}
      {loading && <h3>Loading...</h3>}
      {blogs && (
        <>
          <BlogList blogs={blogs} title="All the Blogs!" />
        </>
      )}
    </div>
  );
};

export default Home;
