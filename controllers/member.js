const {development} = require('../config/config');
const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const Member = require('../models/member');
const sequelizeCustom = new Sequelize(development);
const memberModel = Member(sequelizeCustom,sequelize.DataTypes);

const findOneMember = async (id = -1)=> {
    return await memberModel.findOne({
        where:{
            id
        }
    })
}

const createMember = async (req,res,next) => {
    
    const validatorName = /^([A-Za-z]+\s?)+$/;

    const {name:nameMember,image} = req.body;
    if(!validatorName.test(nameMember))
        res.status(400)
        .send({message:`Name is Required`,nameMember});
    else{
        try{
            const newMember = await memberModel
            .create({ 
                name:nameMember,
                image
            })
            res.status(200).json(newMember);
        }catch(exception){
            res.status(400)
            .json({
                exception
            });
        }
    }        
};
const findMembers = async (req,res,next) => {
    try{
        const members = await memberModel.findAll();
        res.json(members);
    }catch(error){
        res.status(500)
        .json(error)
    }
    
};
const removeMember = async (req,res,next) => {
    const {id = -1} = req.params;
    try{
        const remove = await memberModel.destroy({ 
            where:{
                id
            }
        });
        res.status(200).json(remove);
    }catch(error){
        res.status(500).json({error});
    }
};
const updateMember = async (req,res,next) => {
    const {id = -1} = req.params;
    const {name:nameMember,image} = req.body;
    const member = await findOneMember(id)  
    if(member){
        const memberUpdate = await member.update(
            {
                name:nameMember,
                image
            },
            {
                where:{
                    id
                }
        });
        res.status(200).json({message:`Update Member OK`,memberUpdate});
        }else{
            res.status(400).json({message:`Bad Request id member not Found ${id}`});
    }           
};

module.exports = {
    createMember,
    findMembers,
    removeMember,
    updateMember
}