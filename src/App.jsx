import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Create from "../components/Create";
import NotFound from "../components/NotFound";
import BlogDetail from "../components/BlogDetail";

import { BrowserRouter, Route, Switch } from "react-router-dom";
/* # Client-side routing (CSR)
React Router enables "client-side routing". In traditional websites, the browser
requests a document from a web server, downloads and evaluates CSS and JS assets
and renders the HTML sent from the server. When the user clicks a link it starts
that whole process all over again for a new page. 🤬

> But *client-side routing* allows your app to update the URL from a link click
without making another request for another html files from the server. Instead,
your app can immediately render some new UI, and still make those needed fetch
requests to update the page with new information.

This enables faster user experiences because the browser doesn't need to request
an entirely new document or re-evaluate css and js assets for the next page. It
also enables more dynamic user experiences with things like (animation).

Client-side routing is enabled by creating a top-level <Router /> component and
linking/submitting to pages with other React Router components.

Below we firstly need to define the top-level <Router /> component that wraps
all our App components so that route specific data can be made use of!

`matchRoutes` runs route matching algorithm for a set of routes against a given
`location` to see which routes (if any) match. If it finds a match, an array of
RouteMatch objects is returned, one for each route that matched. Its the heart
of React Router's matching algorithm. It is used internally by `useRoutes` and
the <Routes> component to determine which routes match the current `location`.
It can also be useful in some situations where you want to manually match.

The <Switch /> component looks through all of its child routes and displays the
first whose `path` match the current client browser URL. The matching occurs top
to bottom of the nested components within the <Switch /> component.

The `component` is what we want to use in our app and because we have multiple
routes/pages in our App, but we only want to show one page at a time. If a user
attempts goes to a page for which we don't have a defined route, we can create
a route to path to and we do that by catching all conditions with a * asterisk.

> https://v5.reactrouter.com/web/api/Switch
> https://www.freecodecamp.org/news/react-router-cheatsheet/

# Dynamic routes: 
One thing that we didn't cover when it comes to routes is that we can naturally
create dynamic routes. This means routes that are not fixed and determined, but
can be any number of characters. **Dynamic routes** are helpful in situations
where we have, say a blog post with a unique `slug`.

How can we make sure we display the appropriate data and appropriate components,
given a blog post slug can be completely different? To declare a route parameter
on a given route, it must be prefixed with a colon `:`.

Lastly we dynamically display `BlogDetail` from the Home route, as each detailed
component rendered. The `Link` handles this change to the new dynamic route.

```jsx
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(({ id, title, body, author }) => (
        <div key={id} className="blog-preview">
          <Link to={`/blogs/${id}`}>
            <h2>{title}</h2>
            <p>Written by: {author}</p>
            <p>{body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
```
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
  return (
    <BrowserRouter>
      <div className="wrapper">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
            <Route path="/blogs/:slug" exact component={BlogDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
