import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Form>
        <h2>Login</h2>
        <label htmlFor="">
          User name:
          <input type="text" />
        </label>
        <label htmlFor="">
          Password:
          <input title="passwod" />
        </label>
        <button>Login</button>
        <p>
          You don't have an account? <Link to="/register"> Sign Up Here </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
