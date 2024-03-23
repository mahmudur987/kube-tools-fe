import { useQuery } from "react-query";
import Axios from "./Axios";

export const postNewsLetter = async (email) => {
  try {
    const { data } = await Axios.post("/email", email);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
export const useGetAllEmails = () => {
  return useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const { data } = await Axios.get("/email");
      return data;
    },
  });
};

export const deleteEmail = async (id) => {
  try {
    const { data } = await Axios.delete(`/email/${id}`);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
