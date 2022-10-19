import Home from "../components/Home";
import NavBar from "../components/NavBar";

/* # App is our root component: 
App is the root component in our React application. Its the first function that
is a component, that is called within our `index.js` script file. It renders it
to the index.html `root` container position via `document.getElementById`.

In turn App `return` that means (renders) its own content. This HTML/XML looking
syntax is called JSX. Components/functions have to start with a capital letter.
The `return` also has to be a single expression. The JSX syntax makes it easier
to create HTML like templates, in the background a transpiler called Babel does
convert all of the JSX to regular JS code for browsers to understand. Additional
the Babel transpiler needs our `props` to be in camel cased.

> React v16+, we don't need to import `React` from 'react' for each component.
*/
function App() {
  /* Dynamic values in our JSX syntax (templates): 
  Using carly braces in our JSX, React knows we want to return dynamic values.
  Now it does not matter if the values are of type number, React "Babel" behind
  the scenes is going to convert all values strings within the client browser.

  ! You can not output in your braces any type of object.
  ! Error: Objects are not valid as a React child.

  ```jsx
  return (
    <div className="App">
      <div className="content">
        <h1>numbers {30}</h1>
        <h1>string {"yoshi"}</h1>
        <h1>boolean {false}</h1>
        <h1>array {[1, 2, 3]}</h1>
        <h1>object {{ name: "yoshi", age: 30 }}</h1> // ! problem here
        <h1>math expression {Math.random() * 10}</h1>
      </div>
    </div>
  );
  ```
  `
  */
  const person = { name: "yoshi", age: 30 };
  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
