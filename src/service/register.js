import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
export async function register({ username, password }) {
  return await api.post(
    "user",
    { username, password },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );
}
