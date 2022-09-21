const { Activity } = require("../models")

const createActivity = async (req, res, _next) => {
    try {
        const { name, image, content } = req.body
        const newActivity = await Activity.create({
            name,
            image,
            content,
        })
        res.send(newActivity)
    } catch (err) {
        res.status(400).send(err)
    }
}


module.exports = {
    createActivity
};