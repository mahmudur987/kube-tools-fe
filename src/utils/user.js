import { useQuery } from "react-query";
import Axios from "./Axios";

export const useAllUser = () => {
  return useQuery({
    queryKey: ["all user"],
    queryFn: async () => {
      const { data } = await Axios.get("/user/allUser");
      return data;
    },
  });
};
