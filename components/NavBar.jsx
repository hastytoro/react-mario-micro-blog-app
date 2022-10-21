/* # Multiple Components: 
React applications has functions/components structured within a component tree.
As mentioned, App is likely your root component. Think of it at the "bottom" of
your call stack, execution stack. Its the first bit of your application called,
in your execution context. If you making more components, these functions will
be nested. Functions written inside another function is a nested function.

Suppose that there are two functions, an outer function and inside it there is
an inner function. The inner function will have access to its own variables, the
outer functions variables, arguments and it has access to global variables. This
is done by a scope chain. Every function so created has a scope chain associated
with which helps us in accessing the variables value. */
import { Link } from "react-router-dom";
/* # Making use of Link components: 
We can do so with another special component from React Router DOM called `Link`
component. It accepts the `to` prop, which specifies where we want the link to
navigate our user to. Otherwise making use of <a> tags, then that by default is
going to make server-side navigation/requests, instead of intended client-side.
In short, Link has special functionality that ensures React Router handles the
navigation and prevents that unwanted network server request. It observes the
`to` prop and then matches that against one of the <Switch /> routes.
*/
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 id="logo">Logo</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
