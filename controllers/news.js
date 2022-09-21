const { News } = require("../models");

const findAllNews = async (req, res) => {
  try {
    const news = await News.findAll({ where: { type: "news" } });

    return res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  findAllNews,
};
