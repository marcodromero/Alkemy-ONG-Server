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
const updateMember = async (req, res, next) => {
    const { id = -1 } = req.params;
    const { name: nameMember, image } = req.body;
    const member = await findOneMember(id)
    if (member) {
        const memberUpdate = await member.update(
            {
                name: nameMember,
                image
            },
            {
                where: {
                    id
                }
            });
        res.status(200).json({ message: `Update Member OK`, memberUpdate });
    } else {
        res.status(400).json({ message: `Bad Request id member not Found ${id}` });
    }
};

module.exports = {
    createMember,
    findAllMembers,
    removeMember,
    updateMember
}