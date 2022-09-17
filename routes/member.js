const express = require('express');
const routes = express.Router();
const {createMember,findMembers,removeMember,updateMember} = require('../controllers/member');
routes.post('/',createMember);
routes.get('/',findMembers);
routes.delete('/:id',removeMember);
routes.put('/:id',updateMember);
module.exports = routes;