import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer rrgEuwGB41UxoyoVINfYaQ3WGSW5R9iPzgQD_8thD7MgI0acTPqAyciyaeGhLtiDCLoYCaC4PrZMEcuXziU7Lv3vITMEWd2XYBCh5iZ9x1x9HcIwKlHDTvFlTgqhYHYx",
    },
});
