import { useState } from "react";
import "./App.css";

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
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
