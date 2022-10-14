const { Activity } = require("../models")


const getActivity = async (req, res, _next) => {
    try{
        const {id } = req.params
        const activity = await Activity.findOne({where: {id: id}})
        if(activity){
            res.status(200).send(activity)
        }else{
            res.status(404).send({'error': 'activity not found'})
        }
    }catch(e){
        res.status(400).send({'error': e})
    }
}

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

const updateActivity = async (req, res, _next) => {
    try {
        const { id } = req.params
        const { name, image, content } = req.body
        const activityExist = await Activity.findOne({ where: { id } })
        if (!activityExist) {
            throw "Activity doesn't exist"
        } else {
            const activity = {
                id,
                name,
                image,
                content
            }
            await Activity.update(activity, {
                where: { id }
            })
            res.send(activity)
        }

    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    createActivity, updateActivity, getActivity
};

