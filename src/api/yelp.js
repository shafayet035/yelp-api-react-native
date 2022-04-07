import axios from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Jxq9RCcVvjuWtDyLE-zLuKRosZV1CDwQG9K8aP4HuVN3KdksID51CYqYYkxmYEcIY5j7DiyyKz3CniMy2N4JuGGnjOPpq97HjeQR5bJEOtWj84OsBXY21sCRIidPYnYx",
  },
});

export default yelp;
