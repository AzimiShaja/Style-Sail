import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { BiSolidRename } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10 shadow-2xl p-10 rounded-lg min-w-sm lg:w-5/12">
        <h1 className="text-4xl font-bold lg:max-w-sm text-center font-Open">
          Register
        </h1>
        {/**Form starts */}
        <form className="flex flex-col gap-4 w-full">
          <div className="flex items-center border-l-4 border-orange-600 gap-1 px-3 rounded-sm">
            <BiSolidRename className="text-lg" />
            <input
              type="text"
              placeholder="Full name"
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />
          </div>
          <div className="flex items-center border-l-4 border-orange-600 gap-1 px-3 rounded-sm">
            <FaUserAlt className="text-lg" />
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <div className="flex items-center border-l-4 border-orange-600 gap-1 px-3 rounded-sm">
            <MdOutlinePassword className="text-lg" />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </div>
          <div className="flex items-center border-l-4 border-orange-600 gap-1 px-3 rounded-sm">
            <MdOutlinePassword className="text-lg" />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-orange-600 mt-10 border box-border text-white py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border-orange-600 duration-300 "
          >
            Sign up
          </button>
        </form>
        {/**Form ends */}
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-black">
            Login
          </Link>
          {""}
        </p>
      </div>
    </div>
  );
};

export default Register;
