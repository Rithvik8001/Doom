import React, { useState } from "react";
import LoginForm from "./login-form";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";

const Login = () => {
  const [emailId, setEmailId] = useState("pranay@gmail.com");
  const [password, setPassword] = useState("Pranay@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_BACKEND_URL + "/api/auth/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data.user));

      navigate("/feed");
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="w-full max-w-sm sm:max-w-md mx-auto mt-42">
          <Link to={"/"}>
            <ArrowLeftIcon className="mb-8" />
          </Link>
          <LoginForm
            handleLogin={handleLogin}
            emailId={emailId}
            password={password}
            setEmailId={setEmailId}
            setPassword={setPassword}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
