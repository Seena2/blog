import { Outlet, NavLink } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <h1>The Seena Blog</h1>
          <div className="navlinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="createBlog">New Blog</NavLink>
            <NavLink to="login">Login</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
