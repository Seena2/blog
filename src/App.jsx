import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
//Layouts
import RootLayout from "./layouts/RootLayout";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

//Create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="createBlog" element={<CreateBlog />} />
      <Route path="login" element={<Login />} />
      <Route path="blogs/:id" element={<BlogDetails />} />

      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
