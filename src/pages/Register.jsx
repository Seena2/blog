import { Form } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <Form>
        <h2>Registration Form</h2>
        <label htmlFor="">
          First Name:
          <input type="text" />
        </label>
        <label htmlFor="">
          Last Name:
          <input type="text" />
        </label>
        <label htmlFor="">
          E-mail:
          <input type="email" name="" id="" />
        </label>
        <label htmlFor="">
          Gender:
          <select name="" id="">
            <option value="Femal">Femal</option>
            <option value="Male">Male</option>
          </select>
        </label>
        <label htmlFor="">
          Birth Date:
          <input type="date" name="" id="" />
        </label>
        <button>Register</button>
      </Form>
    </div>
  );
};

export default Register;
