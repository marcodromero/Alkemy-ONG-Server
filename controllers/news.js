const { News } = require("../models");

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

module.exports = {
  detailNews,
};
