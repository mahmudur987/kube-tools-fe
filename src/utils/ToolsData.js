import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useAddToolInCategory = () => {
  return useMutation({
    mutationFn: async ({ data, id }) => {
      console.log(data, id);
      const response = await Axios.post(`addnewtool/${id}`, data);
      return response.data;
    },
  });
};

export const useUpdatetool = () => {
  return useMutation({
    mutationFn: async ({ data, categoryid, toolid }) => {
      console.log(data, categoryid, toolid);
      const response = await Axios.patch(
        `updatetool/${categoryid}/${toolid}`,
        data
      );
      return response.data;
    },
  });
};

export const useAddcategory = () => {
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await Axios.post(`/tool`, data);
      console.log(response);
      return response.data;
    },
  });
};

// /editCategory
// serviceId, mainCategoryId, newCategoryName
