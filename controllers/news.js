const { News } = require("../models");

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
  }
};



const findAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      where: { type: "news" },
      attributes: ["name", "image", "createdAt"],
    });

    return res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {updateNews,findAllNews};


