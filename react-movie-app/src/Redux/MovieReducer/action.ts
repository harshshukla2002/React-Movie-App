import axios from "axios";

export const GetData = async (input: string) => {
  let res = await axios.get(
    `https://www.omdbapi.com/?i=tt3896198&apikey=20e5aeb2&s=${input}`
  );
  return res.data;
};
