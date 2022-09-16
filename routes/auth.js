const express = require('express');
const sequelize = require('sequelize');

const router = express.Router();
const { User, Role } = require('../models');
router.post('/register', (req, res, next) => {

    
    
    const {firstName, lastName, email, password, roleId, image} = req.body;
    const userExist = User.findOne({where: {email: email}});
    if(userExist){
        res.send('User already exist');
    }
    else{
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            image,
            roleId: roleId || 2
        });
        
        newUser.save()
        res.send(newUser)
    }
    
}) 

router.post('/login', (req, res, _next) => {
    res.send('Login');
})




module.exports = router;