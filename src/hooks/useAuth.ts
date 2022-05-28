/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/User";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const login = useCallback((id: string) => {
    setLoading(true);
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios
      .get<User>(url)
      .then((res) => {
        if (res.data) {
          history.push("/home");
        } else {
          alert("ユーザが存在しません");
        }
      })
      .catch(() => {
        alert("ログインできません");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { login, loading };
};
