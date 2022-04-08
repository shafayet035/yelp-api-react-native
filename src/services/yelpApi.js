import yelp from "../api/yelp";

export const getRestaurants = async (searchTerm) => {
  try {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        location: "new york",
        term: searchTerm,
      },
    });

    return response.data.businesses;
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurant = async (id) => {
  try {
    const response = await yelp.get(`/${id}`);
    return response.data;
  } catch (error) {}
};
