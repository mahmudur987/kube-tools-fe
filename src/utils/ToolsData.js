import { useQuery } from "@tanstack/react-query";
import Axios from "./Axios";

export const posttools = async (data) => {
  try {
    const response = await fetch(
      "https://kubetools-iifevp189-mahmudur987.vercel.app/tools",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["/categories"],
    queryFn: async () => {
      const { data } = await Axios.get("/categories");
      return data;
    },
  });
};

// get toolsby caegory

export const useGetToolsByCategory = (id) => {
  return useQuery({
    queryKey: ["tools", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Category ID is required");
      }
      const { data } = await Axios.get(`/tools/${id}`);
      return data;
    },
  });
};
export const useGetTools = () => {
  return useQuery({
    queryKey: ["tools"],
    queryFn: async () => {
      const { data } = await Axios.get(`/tools`);
      return data;
    },
  });
};
