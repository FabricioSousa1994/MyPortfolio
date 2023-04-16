import axios from "axios";

const BASE_URL = `${process.env.PORTFOLIO_API}`;

export const sendMessage = (message) => {
    return axios.post(`${BASE_URL}/send`, message);
  };