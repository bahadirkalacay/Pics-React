import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID X8za3dGyqziEkC1-TVOWRnyV4mk_bijrM1CdVU8qYZI",
  },
});
