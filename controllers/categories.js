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

    const categoryExist = await Category.findOne({where: {id: id, deletedAt: null}});

    if(categoryExist){
        await Category.update({name: name, description: description}, {where: {id: id}});
        res.send('The category was successfully updated.');
    }else{
        res.send('category id does not exist.');
    }
    
}

module.exports = {
    getAllCategories,
    updateCategory
}