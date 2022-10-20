import { useEffect, useState } from "react";

/* Defining use custom-hooks 🪝: 
A great ability with programming is taking code and placing it in a function and
reusing it in other places in our software. Let’s imagine a scenario we want to
share our `localStorage` code with other components so other components can sync
state with `localStorage`. Take a step back from React specifically and consider
how code reuse works in general. We simply make a function, and put all relevant
code in that function and then call it from the original location. That process
works exactly the same with React hooks code.

```jsx
function useLocalStorage(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  );
  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
}
```
The logic we used for storing state in local storage and keeping it synchronized
could be really useful in other areas of our app. A plus, React hooks are pretty
vanilla JS, so its straightforward. Make a function like `useLocalStorageState`,
that is going to be reusable. Now your App can move away from those needed state
and effect React hooks. And instead invoke the reuseable function and now we can
just perform a single function call from our components.

```jsx
function Greeting() {
  const [name, setName] = useLocalStorage("name");
  ...
}
```
Now when we call our custom hook we're going to need access to the state updater
function and the current state value, so let's return `[state, setState]`. Now
our hook has a similar API to `useState` hook. When our consuming components use
this custom hook, they can destructure those return values the same way. We can
name custom hooks whatever we want. But the reason it's a convention to preface
their name with `use` is so (eslint plugins) can recognize our custom hooks.

Notice, we renamed the previous state to a more generic type name like `data`.
This is because we want to keep the custom hook very reusable.
*/
export default function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Here we simulate the side-effect:
    setTimeout(() => {
      fetch(endpoint)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from server!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, [endpoint]);
  // You can return either object our array to destructure:
  // return { data, loading, error };
  return [data, loading, error];
}
