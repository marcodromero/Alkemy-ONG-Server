const express = require('express');
const {development} = require('../config/config');
const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const Member = require('../models/member');
const routes = express.Router();
const sequelizeCustom = new Sequelize(development);
routes.post('/',(req,res,next) => {
    //Este seria el Controller
    const validatorName = /^([A-Za-z]+\s?)+$/;
    const {name:nameMember,image} = req.body;
    console.log(nameMember)
    if(!validatorName.test(nameMember))
        res.status(400)
        .send({message:`Name is Required`,nameMember});
    else{
        Member(sequelize,sequelize.DataTypes)
        .create({name:nameMember,image})
        .then(member => {
            res.json(member);
        })
        .catch(err => {
            res.status(400)
            .json({
                error:err
            });
        })
        
    }        
});
routes.get('/',(req,res,next) => {
    const member = Member(sequelizeCustom,sequelize.DataTypes);
    member.findAll()
    .then(members => {
        res.json(members);
    })
})
module.exports = routes;