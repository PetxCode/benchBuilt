import axios from "axios";

const url = "http://localhost:2233";

export const getData = async () => {
  return await axios.get(url);
};

export const postData = async (data: any) => {
  return await axios.post(url, data);
};
