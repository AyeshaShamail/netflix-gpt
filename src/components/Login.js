import React, { useRef, useState } from "react";
import Header from "./Header";
// import { checkValidData } from "../utils/validate";
import { checkValidData } from "../utils/validate";

const Login = () => {
  //useRef is usd to reference a field over here(tag or input)
  // To store error message we use useState
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //creating reference
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current.value);

    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    // console.log(message);
    setErrorMessage(message);
    if (message) return;

    //Sign in/Sign Up logic
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);

    //Sign in/ Sign Up
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 flex flex-col items-center rounded-lg bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder=" Full Name"
            className="p-4 my-4 w-full text-xs bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full text-xs bg-gray-800"
        />{" "}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full text-xs bg-gray-800"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 m-6 bg-red-700 text-xl w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now!"
            : "Already registered? Sign In now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
