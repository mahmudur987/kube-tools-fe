import { useQuery } from "@tanstack/react-query";
import Axios from "./Axios";

export const postBanner = async (banner) => {
  try {
    const { data } = await Axios.post("/banner", banner);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
export const useGetAllBanner = () => {
  return useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { data } = await Axios.get("/banner");
      return data;
    },
  });
};

export const useGetSingleBanner = (id) => {
  return useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await Axios.get(`/banner/items/${id}`);
      return data;
    },
  });
};

export const updateBanner = async (id, banner) => {
  try {
    const { data } = await Axios.patch(`/banner/items/${id}`, banner);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
export const deleteBanner = async (id) => {
  try {
    const { data } = await Axios.delete(`/banner/items/${id}`);
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
