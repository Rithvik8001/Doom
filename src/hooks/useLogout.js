import { useDispatch } from "react-redux";
import { removeUser } from "../store/user";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      await axios.post(
        import.meta.env.VITE_API_BACKEND_URL + "/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setError(null);
    } catch (err) {
      setError(
        err?.response?.data?.message || err?.message || "Logout failed."
      );
    }
    dispatch(removeUser());
    navigate("/login");
  };

  return { logout, error };
};

export default useLogout;
