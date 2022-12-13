import "./App.css";

import Contact from "./components/Contact/Contact";

import About from "./components/About/About";

import Project from "./components/Project/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Blog from "./components/Blog/Blog";
import Home from "./components/Layout/Home/Home";
import Details from "./components/Project/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },

        {
          path: "/projects",
          element: <Project></Project>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
        },
      ],
    },
  ]);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <Navbar></Navbar>
     <Header></Header>
     <Feature></Feature>
     <About></About>
     <Skills></Skills>
     <Project></Project> */}
      {/* <Home></Home> */}
      {/* <Contact></Contact> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
