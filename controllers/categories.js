const {Category} = require('../models');

const getAllCategories = async (res) => {
    console.log("controlador");
    const rta = await Category.findAll({
        attributes: ['name'] 
    });

    res.send(rta);
}

const updateCategory = async (req, res) =>{
    const {id} = req.params;
    const {name, description} = req.body;

    const categoryExist = await Category.findOne({where: {id: id}});

    if(categoryExist){
        await Category.update({name: name, description: description}, {where: {id: id}});
        res.send('The category was successfully updated.');
    }else{
        res.send('category id does not exist.');
    }
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
    updateCategory,
    addCategory
}