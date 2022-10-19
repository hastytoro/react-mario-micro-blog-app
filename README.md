# Full Modern React

## 📝 Your Notes

## #1 What is React

It's a JavaScript Library used to create Websites. It allows us to easily create
a client-side Single Page App (SPA). The hosting server only needs to respond to
a client browser initial request with a single (`index.html`) file.

The browser (client) sends a request to the server, and the server gives back
a huge `*.js` file with a teeny HTML file. The client uses these files to build
the page. In case it needs an update on new messages, JS sends a request to the
server, and the server replies with a lightweight `*.js` file only for carrying
the new info. Now when the client refreshes the page without reloading it. The
whole process is much simpler and quicker than in the older (MPA) case.

For additional information, see [React to Build Single-Page Applications](https://www.qulix.com/about/blog/react-spa/)

## #2 Creating a React App

Run `npx create-react-app my-app` that scaffolds all needed files/folders to get
started with your application. Here is the initial folder structure:

- `node_modules` - contains dependencies for a working react app.
- `public` - holds all public facing files available to the browser.
- `src` - in simplest form it’s our React application folder.

For additional information, see [How To Structure React Projects](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
