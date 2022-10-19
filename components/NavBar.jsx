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
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default NavBar;
