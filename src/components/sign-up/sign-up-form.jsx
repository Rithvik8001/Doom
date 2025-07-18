import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <h1 className="text-center text-4xl ">
        Sign up to <span className="tracking-tighter font-bold"> Doom.</span>
      </h1>
      <div className="flex flex-col">
        <div className="p-2 mt-4 flex flex-col space-y-1">
          <label>Email</label>
          <input className="w-full border-black border p-1.5" />
          <label>Password</label>
          <input className="w-full border-black border p-1.5" />
          <button className="mt-2 p-2 bg-black text-white cursor-pointer">
            Sign up to Doom
          </button>
          <Link to={"/login"}>
            <button className="text-md cursor-pointer hover:underline  w-full">
              Already have an account? please login.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
