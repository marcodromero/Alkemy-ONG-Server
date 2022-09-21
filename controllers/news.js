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

module.exports = {
  updateNews,
};
