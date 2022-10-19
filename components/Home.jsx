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
  // let name = "mario"; // Not reactive variable ❌
  const [name, setName] = useState("mario 🍄"); // reactive variable ✅
  const [age, setAge] = useState(25);
  const handleClick = () => {
    /* # You need reactive state management: 
    The below does update the variable. React isn't reacting "😅" watching for
    that change to occur, its not going to re-ender JSX with that change. When 
    the value change, no trigger updates the template with the updated value. In
    order for this to work we need the state value to be reactive. So that when
    state changes React detects that and updates the template value. The modern
    way of wiring this up is with state hooks `useState` 🪝. That returns two
    value that we array destructure off to make use of.
    */
    // name = "luigi"; // Not reactive variable ❌
    setName("luigi 🍄");
    console.log(name);
  };
  return (
    <div className="home">
      <h2>Home page</h2>
      <p>
        {name} is {age}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
