import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../store/user";

export default function useAuthUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_BACKEND_URL + "/api/user/profile",
          { withCredentials: true }
        );
        dispatch(addUser(response.data));
      } catch {
        dispatch(addUser(null));
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);

  return { user, loading };
}
