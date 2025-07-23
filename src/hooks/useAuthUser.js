import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../store/user";

export default function useAuthUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_BACKEND_URL + "/api/user/profile",
          { withCredentials: true }
        );
        dispatch(addUser(response.data));
        setError(null);
      } catch (err) {
        dispatch(addUser(null));
        if (err?.response?.status !== 401) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Failed to fetch user profile."
          );
        } else {
          setError(null);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);

  return { user, loading, error };
}
