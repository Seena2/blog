//This Page is never used, becouse it is converted to react-router to create routes
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Seena Blog</h1>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <a
          href="/login"
          style={{
            color: "#fff",
            backgroundColor: "#f1356d",
            borderRadius: "6px",
          }}
        >
          Log in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
