import axios from "axios";


export const fetchAllArticles = () => {
  const url = "https://jc-news.herokuapp.com/api/articles";
    return axios.get(`${url}`).then((res) => {
      return res.data
    });
};

export const fetchAllTopics = () => {
  const url = "https://jc-news.herokuapp.com/api/topics";
    return axios.get(`${url}`).then((res) => {
      return res.data.topics
    });
};

export const fetchArticlesByTopic = (topic) => {
  const url = `https://jc-news.herokuapp.com/api/articles?topic=${topic}`;
    return axios.get(`${url}`).then((res) => {
      return res.data
    });
};