import React from "react";
import SignUpForm from "./sign-up-form";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="w-full max-w-sm sm:max-w-md mx-auto mt-42">
          <Link to={"/"}>
            <ArrowLeftIcon className="mb-8" />
          </Link>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
