const { Member } = require('../models');

const findOneMember = async (id = -1) => {
    return await memberModel.findOne({
        where: {
            id
        }
    })
}

const createMember = async (req, res, _next) => {
    try {
        const { name, image } = req.body
        const newMember = await Member.create({
            name,
            image,
        })
        res.send(newMember)
    } catch (err) {
        res.status(400).send(err)
    }
};
const findAllMembers = async (req, res, _next) => {
    try {
        const members = await Member.findAll();
        res.json(members);
    } catch (err) {
        res.status(400).send(err)
    }

};
const removeMember = async (req, res, _next) => {
    try {
        const { id } = req.params
        const memberExist = await Member.findOne({ where: { id } })
        if (!memberExist) {
            throw "Member doesn't exist"
        } else {

            await Member.destroy({
                where: { id }
            })
            res.send(memberExist)
        }

    } catch (err) {
        res.status(400).send(err)
    }
};
const updateMember = async (req, res, _next) => {
    try {
        const { id } = req.params
        const { name, image } = req.body
        const memberExist = await Member.findOne({ where: { id } })
        if (!memberExist) {
            throw "Member doesn't exist"
        } else {
            const member = {
                id,
                name,
                image
            }
            await Member.update(member, {
                where: { id }
            })
            res.send(member)
        }

    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports = {
    createMember,
    findAllMembers,
    removeMember,
    updateMember
}