import axios from "axios";

export const fetchAllArticles = () => {
  const url = "https://jc-news.herokuapp.com/api/articles";
    return axios.get(`${url}`).then((res) => {
      return res.data.items;
    });
};