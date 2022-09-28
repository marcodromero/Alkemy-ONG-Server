const { User, Role } = require("../models");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT
const SECRET = String(process.env.TOKEN_SECRET)
const registerUser =  async (req, res, _next) => {
    
    const { firstName, lastName, email, password, roleId, image } = req.body;
    if (firstName && lastName && email && password && roleId && image) {
      const userExist = await User.findOne({ where: { email: email } });
      if (userExist) {
        res.send("User already exist");
      } else {
        const hashPassowrd = bcrypt.hashSync(password, Number(saltRounds))
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashPassowrd,
          image,
          roleId: roleId || 2,
        });
        newUser.save();
        const token = jwt.sign({newUser}, SECRET, {expiresIn: '2d'}) 
        res.header('Authorization', token).send(newUser);
      }
    } else {
      res.send("Please fill all fields");
    }
  }

  const loginUser = async (req, res, _next) => {
    const { email, password } = req.body;
    if(email && password) {
      const user = await User.findOne({where: {email: email}})
      if(user) {
        const isValidUser = bcrypt.compareSync(password, user.password)
        if(isValidUser){

          const token = jwt.sign({user}, SECRET, {expiresIn: '2d'}) 
          res.status(200).send({
            Authorization: token,
            user: user
          }).end();
        }else{
          res.status(400).send('Password is wrong')
        }
      }else{
        res.status(400).send('Email not found')
      }
    }
  }

const getUsers = async (req, res, _next) => {
  const users = await User.findAll()
  res.send(users)
}
  module.exports = {
    registerUser,
    loginUser,
    getUsers
  };