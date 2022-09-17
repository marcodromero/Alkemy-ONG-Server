const {Contact} = require('../models')
const createContact = async (req, res, _next) => {
    const contacts = await Contact.findOne({})
    console.log(contacts)
    res.send('contact')
}

module.exports = {
    createContact
}