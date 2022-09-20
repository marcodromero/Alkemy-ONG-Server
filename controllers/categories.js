const {Category} = require('../models');

const getAllCategories = async (res) => {
    console.log("controlador");
    const rta = await Category.findAll({
        attributes: ['name'] 
    });

    res.send(rta);
}

const deleteCategory = async (req, res) => {
    const {id} = req.params;

    const categoryExist = await Category.findOne({where: {id: id}});

    if(categoryExist){
        await Category.destroy({where: {id: id}});
        res.send('The category was removed.');
    }else{
        res.send('category id does not exist.');
    }
}

module.exports = {
    getAllCategories,
    deleteCategory
}