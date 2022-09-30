const { Organization } = require('../models');


const getOrganization = async (req, res, _next) => {
    try {
        const organization = await Organization.findOne();
        res.json(organization);
    } catch (err) {
        res.status(400).send(err)
    }

};

const updateOrganization = async (req, res, _next) => {
    try {
        const { title, description, image } = req.body
        const existOrganization = await Organization.findOne()
        if (!existOrganization) {
            throw "Organization doesn't exist"
        } else {
            const organization = {
                id: existOrganization.id,
                title,
                description,
                image,
                facebook: existOrganization.facebook,
                linkedin: existOrganization.linkedin,
                instagram: existOrganization.instagram
            }
            await Organization.update(organization, {
                where: { id: organization.id }
            })
            res.json(organization)
        }
    } catch (error) {
        res.status(400).send(err)
    }

}

module.exports = {
    getOrganization,
    updateOrganization
}