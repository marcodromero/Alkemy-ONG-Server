const {development} = require('../config/config');
const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const Member = require('../models/member');
const sequelizeCustom = new Sequelize(development);
const memberModel = Member(sequelizeCustom,sequelize.DataTypes);

const findOneMember = (id = -1)=> {
    return memberModel.findOne({
        where:{
            id
        }
    })
}

const createMember = (req,res,next) => {
    //Este seria el Controller
    const validatorName = /^([A-Za-z]+\s?)+$/; //Service?
    const {name:nameMember,image} = req.body;
    console.log(nameMember)
    if(!validatorName.test(nameMember))
        res.status(400)
        .send({message:`Name is Required`,nameMember});
    else{
        memberModel
        .create({ 
            name:nameMember,
            image
        })
        .then(member => {
            res.json(member);
        })
        .catch(error => {
            res.status(400)
            .json({
                error
            });
        })
        
    }        
};
const findMembers = (req,res,next) => {
    
    memberModel.findAll()
    .then(members => {
        res.json(members);
    })
};
const removeMember = (req,res,next) => {
    const {id = -1} = req.params;
    memberModel.destroy({where:{
        id
    }})
    .then((removes) => {
        res.json({removes})
    })
    .catch((error) => {
        res.status(500).json({error});
    })
};
const updateMember = (req,res,next) => {
    const {id = -1} = req.params;
    const {name:nameMember,image} = req.body;
    findOneMember(id)  
    .then((member) => {
        if(member){
            member.update({
                name:nameMember,
                image
            },
            {
                where:{
                    id
                }
            })
            .then((memberUpdate)=>{
                res.status(200).json({message:`Update Member OK`,memberUpdate});
            })
            
        }else{
            res.status(400).json({message:`Bad Request id member not Found ${id}`});
        }
            
    })
    
};

module.exports = {
    createMember,
    findMembers,
    removeMember,
    updateMember
}