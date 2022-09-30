const { Organization } = require('../models');


const getOrganization = async (req, res, _next) => {
    try {
        const organization = await Organization.findOne();
        res.json(organization);
    } catch (err) {
        res.status(400).send(err)
    }

};

module.exports = {
    getOrganization,
}