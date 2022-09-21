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

const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedNew = await News.destroy({ where: { id } });

    if (deletedNew === 0) {
      return res.status(404).json({
        message: "News not found",
      });
    }
    return res.status(200).json({
      message: "Deleted",
      id: id,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, content, image } = req.body;

    const update = await News.update(
      {
        name,
        content,
        image,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({
      message: "News Update",
      data: update,
      newData: { name, content, image },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createNews,
  detailNews,
  updateNews,
  deleteNews,
  findAllNews,
};
