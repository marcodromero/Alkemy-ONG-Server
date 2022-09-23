const { News } = require("../models");

const createNews = async (req, res) => {
  try {
    const dataNews = req.body;

    const news = await News.create(dataNews);

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const findAllNews = async (req, res) => {
  try {
    const news = await News.findAll({});

    return res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const detailNews = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findByPk(id);

    if (!news) {
      return res.status(404).json({
        message: "New not found",
      });
    }

    res.status(200).json({
      message: "New found",
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



module.exports = { createNews, findAllNews, detailNews};

