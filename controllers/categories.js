const {Category} = require('../models');

const getAllCategories = async (res) => {
    console.log("controlador");
    const rta = await Category.findAll({
        attributes: ['name'] 
    });

    res.send(rta);
}

const addCategory = async (req, res) => {
    const {name, description} = req.body;

    if(name && typeof(name) === 'string'){
        const result = await Category.create({name: name, description: description});
        res.status(201).send(result);
    }else{
        res.send('Please indicate the name of the category.');
    }
}

module.exports = {
    getAllCategories,
    addCategory
}