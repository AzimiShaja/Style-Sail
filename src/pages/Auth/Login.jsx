import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
      redirectToHome();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10  shadow-2xl p-10 rounded-lg min-w-sm lg:w-5/12">
        <h1 className="text-4xl font-bold  text-center font-Open">
          Login with your account
        </h1>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex items-center border-l-4 border-l-orange-600 gap-1 px-3 rounded-sm ">
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
          <div className="mt-10 w-full flex max-sm:flex-col  lg:items-center justify-center gap-4">
            <button className="bg-orange-600 border box-border text-white py-3 px-6 rounded-lg hover:bg-transparent hover:text-black hover:border-orange-600 duration-300 ">
              Sign in
            </button>
            <button
              onClick={() => {
                signInWithGoogle();
              }}
              className=" flex gap-2 justify-center items-center border py-3 px-6 rounded-lg hover:bg-gray-100 duration-300"
            >
              Continue with
              <FcGoogle className="text-2xl" />
            </button>
          </div>
        </form>
        <p className="text-gray-500">
          Don't have an account?{" "}
          <Link to={"/register"} className="underline text-black">
            Register now
          </Link>
        </p>
        <div className="flex-col flex items-center">
          <p className="text-xl font-bold">Demo account</p>
          <p>email: mike@gmail.com</p>
          <p>Pass:mike2012 </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
