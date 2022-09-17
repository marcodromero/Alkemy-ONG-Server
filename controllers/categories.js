const {Category} = require('../models');

const getAllCategories = async (res) => {
    console.log("controlador");
    const rta = await Category.findAll({
        attributes: ['name'] 
    });

    res.send(rta);
}

module.exports = {
    getAllCategories
}