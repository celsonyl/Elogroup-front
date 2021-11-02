import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export async function createLead({ name, phone, email }) {
  return await api.post(
    "lead",
    { name, tel: phone, email },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );
}
