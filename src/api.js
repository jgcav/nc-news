import axios from "axios";

export const fetchAllArticles = (query) => {
  const url = "https://jc-news.herokuapp.com/api/articles";
  if (query) {
    return axios.get(`${url}${query}`).then((res) => {
      return res.data;
    });
  } else {
    return axios.get(`${url}`).then((res) => {
      return res.data;
    });
  }
};

export const fetchAllTopics = () => {
  const url = "https://jc-news.herokuapp.com/api/topics";
  return axios.get(`${url}`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticlesByTopic = (topic) => {
  const url = `https://jc-news.herokuapp.com/api/articles?topic=${topic}`;
  return axios.get(`${url}`).then((res) => {
    return res.data;
  });
};

export const fetchArticlesById = (article_id) => {
  const url = `https://jc-news.herokuapp.com/api/articles/${article_id}`;
  return axios.get(`${url}`).then((res) => {
    return res.data.article;
  });
};

export const fetchArticleComments = (article_id) => {
  const url = `https://jc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios.get(`${url}`).then((res) => {
    return res.data.comments;
  });
};

export const amendVotes = (article_id, vote) => {
  const url = `https://jc-news.herokuapp.com/api/articles/${article_id}`;
  return axios.patch(`${url}`, { inc_votes: vote });
};

export const addComment = (article_id, newComment) => {
  const url = `https://jc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios.post(`${url}`, newComment).then((res) => {
    return res.data.comment;
  });
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://jc-news.herokuapp.com/api/comments/${comment_id}`
  );
};
