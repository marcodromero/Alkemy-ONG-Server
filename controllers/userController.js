const { User, Role } = require("../models");

const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT
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
        res.send(newUser);
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
          res.send(user)
        }else{
          res.send('Email or password is wrong!')
        }
      }
    }
  }
  module.exports = {
    registerUser,
    loginUser,
  };