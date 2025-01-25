import React from "react";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card  w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4"
      >
        <h1 className="text-center font-bold text-3xl">Login</h1>

        <FormInput
          name="email"
          label="Email"
          type="email"
          defaultValue={"test@gmail.com"}
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          defaultValue={"secrete"}
        />
        <SubmitBtn text="Login" />
        <h2 className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-secondary">
            Register
          </Link>
        </h2>
      </Form>
    </section>
  );
};

export default Login;
