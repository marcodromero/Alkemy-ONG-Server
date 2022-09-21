const { News } = require("../models");

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


module.exports = {deleteNews}
