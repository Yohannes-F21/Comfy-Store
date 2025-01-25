import React from "react";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card  w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4"
      >
        <h1 className="text-center font-bold text-3xl">Register</h1>

        <FormInput name="username" label="Username" type="text" />
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="password" label="Password" type="password" />
        <SubmitBtn text="Register" />
        <h2 className="text-center">
          Already a member?{" "}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </h2>
      </Form>
    </section>
  );
};

export default Register;
