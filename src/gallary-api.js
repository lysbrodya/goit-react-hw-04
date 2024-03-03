import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "ktfjpQGcfjp6d91ONHWKqtbnT0B3NCk9CiaovDWYZGo",
      page,
      query: searchQuery,
      orientation: "landscape",
      per_page: 12,
    },
  });
  return response.data.results;
};
