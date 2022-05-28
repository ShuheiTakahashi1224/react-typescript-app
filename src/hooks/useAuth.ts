/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/User";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const history = useHistory();
  const login = useCallback((id: string) => {
    setLoading(true);
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios
      .get<User>(url)
      .then((res) => {
        if (res.data) {
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザが存在しません", status: "error" });
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { login, loading };
};
