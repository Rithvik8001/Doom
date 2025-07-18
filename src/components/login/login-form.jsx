import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <h1 className="text-center text-4xl ">
        Login to <span className="tracking-tighter font-bold"> Doom.</span>
      </h1>
      <div className="flex flex-col">
        <div className="p-2 mt-4 flex flex-col space-y-1">
          <label>Email</label>
          <input className="w-full border-black border p-1.5" />
          <label>Password</label>
          <input className="w-full border-black border p-1.5" />
          <button className="mt-2 p-2 bg-black text-white cursor-pointer">
            Login to Doom
          </button>
          <Link to={"/signup"}>
            <button className="text-md cursor-pointer hover:underline  w-full">
              Dont have an account? please register.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
