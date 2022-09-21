const { News } = require("../models");

const createNews = async (req, res) => {
  try {
    const dataNews = req.body;
    dataNews.type = "news";

    const news = await News.create(dataNews);

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNews,
};
